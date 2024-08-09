require('dotenv').config()
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const fs = require('fs')

if (process.env.GOOGLE_API_KEY == ""
	|| process.env.SPREADSHEET_ID == "") {
	throw new Error("Env variable must not be empty.")
}

const sheetData = {};

(async () => {
	// Fetch the metadata of the spreadsheet to get all sheet names
	const resSheets = await sheets.spreadsheets.get({
		key: process.env.GOOGLE_API_KEY,
		spreadsheetId: process.env.SPREADSHEET_ID
	});

	// First 10 and sort it by latest added sheet
	const sheetsList = resSheets.data.sheets.slice(0, 10).sort((a, b) => {
		return a.properties.index - b.properties.index
	});

	if (sheetsList && sheetsList.length > 0) {
		// Iterate over each sheet
		for (let sheet of sheetsList) {
			const sheetName = sheet.properties.title;
			console.log("Sheet: ", sheetName)
			console.log("\t\t> Getting sheet data ", sheetName)

			// Fetch data from each sheet
			// const response = await getSheetData(sheetName);
			// await processSheetData(response, sheetName, sheetsList);
			const res = await sheets.spreadsheets.values.get({
				key: process.env.GOOGLE_API_KEY,
				spreadsheetId: process.env.SPREADSHEET_ID,
				range: `${sheetName}!A1:Z`,  // Adjust range as needed
			})

			console.info("\t\t> Processing done ", sheetName, "\n")

			const rows = res.data.values;
			if (rows && rows.length > 0) {
				const headers = rows[0];
				const data = rows.slice(1).map(row => {
					let rowData = {};
					headers.forEach((header, index) => rowData[header] = row[index] || '');
					return rowData;
				});

				// Store the data in the final output structure
				sheetData[sheetName] = data;

				

			} else {
				console.log(`No data found in sheet ${sheetName}.`);
			}
		}

		// Once all sheets are processed, output the final JSON structure
		if (Object.keys(sheetData).length === sheetsList.length) {
			// console.log(JSON.stringify(sheetData, null, 2));  // Pretty print JSON
			process.env.OUTPUT_PATH.split(',').map(path => {
				fs.writeFileSync(path, JSON.stringify(sheetData, null, 2))
			})
		}

		console.info("Generating done. ", process.env.OUTPUT_PATH)
	} else {
		console.log('No sheets found.');
	}
})()
