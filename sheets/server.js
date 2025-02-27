import express from "express";
import { google } from "googleapis";
import fs from "fs";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

const app = express();

const sheets = google.sheets("v4");

app.use(cors());
app.use(express.json())

app.get("/generate-json", async (req, res) => {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        const spreadsheetId = process.env.SPREADSHEET_ID;

        const resSheets = await sheets.spreadsheets.get({
            key: apiKey,
            spreadsheetId: spreadsheetId,
        });

        const sheetsList = resSheets.data.sheets.slice(0, 10).sort((a, b) => a.properties.index - b.properties.index);
        const sheetData = {};

        for (let sheet of sheetsList) {
            const sheetName = sheet.properties.title;
            const res = await sheets.spreadsheets.values.get({
                key: apiKey,
                spreadsheetId: spreadsheetId,
                range: `${sheetName}!A1:Z`,
            });
            

            const rows = res.data.values;
            if (rows && rows.length > 0) {
                const headers = rows[0];
                sheetData[sheetName] = rows.slice(1).map((row) => {
                    let rowData = {};
                    headers.forEach((header, index) => (rowData[header] = row[index] || ""));
                    return rowData;
                });
            }
        }

        // Save JSON to a file
        const outputPath = process.env.OUTPUT_PATH || "output.json";
        fs.writeFileSync(outputPath, JSON.stringify(sheetData, null, 2));

        res.json({ success: true, message: "JSON file generated", data: sheetData });
    } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        res.status(500).json({ success: false, message: "Error fetching data" });
    }
});


app.get("/deals.json", (req, res) => {
    try {
        const jsonFilePath = "./deals.json";
        
        // Stream the JSON file to avoid memory overload
        const stream = fs.createReadStream(jsonFilePath);
        res.setHeader("Content-Type", "application/json");
        stream.pipe(res);
      } catch (error) {
        console.error("Error reading JSON file:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})

return app;
