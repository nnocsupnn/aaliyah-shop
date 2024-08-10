<template>
	<header>
		<div class="bg-image"></div>
		<div class="overlay">
			<h2>Aaliyah's Amazing Deals</h2>
			<p>Codes, Coupons, Price Drop and Glitches

				<br />
				Welcome to our shop. Please read our
				<a href="#" @click.prevent="openModal('disclaimer')">Disclaimer and Disclosure</a>
				and
				<a href="#" @click.prevent="openModal('privacy')">Privacy Policy</a>.
			</p>
			<br>
		</div>
	</header>
	<ShopModal v-if="currentModal === 'disclaimer'" :isVisible="isModalVisible" title="Disclaimer and Disclosure"
		@close="closeModal">
		<p>
			<b style="font-weight: bold;">DISCLAIMER</b>: PRICES AND OFFERS LISTED ARE VALID AT THE TIME OF POSTING, AND
			MAY CHANGE AT ANY TIME. PLEASE REFER TO THE PRODUCT LISTING FOR THE MOST ACCURATE PRICES. THE PROMOTION OR
			COUPON MAY BE LIMITED TIME/QUANTITY, SO THE PRICES MAY HAVE CHANGED OR INCREASED / UPDATED. PLEASE REFER THE
			PRODUCT DESCRIPTION AND PRICES FOR MOST ACCURATE INFORMATION LIKE MENTIONED. IF SOME ITEMS ARE LIMITED IN
			QUANTITY DUE TO THE ONGOING COVID-19 CONDITIONS (Essentials), THEY MAY BE OUT OF STOCK AS QUICK AS 2-3
			MINUTES. PLEASE ALWAYS REFER TO THE PAGE FOR MOST UPDATED INFORMATION.
		</p>
	</ShopModal>

	<ShopModal v-if="currentModal === 'privacy'" :isVisible="isModalVisible" title="Privacy Policy" @close="closeModal">
		<p>
		<h3>Introduction</h3>

		This is the Privacy Policy of DiscountsByAli (“we”, “them”, or “us”).In this Privacy Policy, we refer to my
		website and services as the “Application.” Please read on to learn more about my data handling practices.
		Your use of the Application signifies that you agree with the terms of this Privacy Policy. If you do not
		agree with the terms of this Privacy Policy, do not use the Application.
		</p>
		<p>
		<h3>Information I Collect</h3>

		When you access the Application on your device we collect the following types of information from you:

		We do not collect any information from your device or your location or anything of that sort, except for
		when you click and order from my link, other companies’ websites which the links point to may know where you
		accessed their website through.

		By choosing to share that information, you should understand that you may no longer be able to control how
		that information is used and that it may become publicly available (depending in part on your actions or the
		actions of others with whom you have shared the information). I am not responsible for any use or misuse of
		information you share.

		Currently, the Application does not offer tools that allow you to opt-out of the collection of Personal
		Information.</p>

		<p>
		<h3>Sharing of Your Information</h3>

		I will not trade, rent or sell your information to third parties. I do not collect any information that I
		can monetize.</p>

		<p>
		<h3>Third Party Links</h3>

		Occasionally, at my discretion, I may include or offer third party products or services in my applications.
		These third party services have separate and independent privacy policies. I therefore have no
		responsibility or liability for the content and activities of these linked applications. Nonetheless, I seek
		to protect the integrity of my applications and welcome any feedback about these applications. Please refer
		to their terms and conditions and privacy policy for the best idea about their “Application”. I do not own
		any trademarks or any rights to these third party websites.</p>

		<p>
		<h3>Age</h3>

		The Application is not directed to children under the age of eighteen (18) and I do not knowingly collect
		personally identifiable information from children under the age of eighteen as part of the Application. If I
		become aware that I have inadvertently received personally identifiable information from a user under the
		age of eighteen as part of the Application, I will delete such information from my records without any
		request being made at my first notice.</p>

		<p>
		<h3>Notification of Changes</h3>

		I reserve the right at my discretion to make changes to this Privacy Policy. You may review updates to my
		Privacy Policy at any time via links on Homepage of this Application. I reserve the right to modify this
		policy from time to time, so please review it frequently.

		If I make material changes to this policy, I will notify you by publishing a revised Privacy Policy or as
		required by law. You agree to review the Privacy Policy periodically so that you are aware of any
		modifications. You agree that your continued use of the Application after I publish a revised Privacy Policy
		or provide a notice on my applications constitutes your acceptance of the revised Privacy Policy. If you do
		not agree with the terms of the Privacy Policy, you should not use the Application.</p>

		<p>
		<h3>Contact Information</h3>

		If you have any questions about this Privacy Policy, please contact me at discountsbyali@gmail.com. Any
		personally identifiable information provided in connection with inquiries related to this Privacy Policy
		will be used solely for the purpose of responding to the inquiry and consistent with my Privacy Policy.</p>
	</ShopModal>
</template>
<script>
import ShopModal from './ShopModal.vue';

export default {
	components: {
		ShopModal
	},
	data() {
		return {
			isModalVisible: false,
			currentModal: ""
		}
	},
	methods: {
		openModal(modalType) {
			this.currentModal = modalType;
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
			this.currentModal = null;
		}
	},
}
</script>
<style scoped>
.modal-body p {
	text-align: justify;
	padding: 20px;
}

/* font-family: 'Kaushan Script', cursive; */
/* font-family: 'Pinyon Script', cursive; */
/* font-family: 'Petit Formal Script', cursive; */
/* font-family: 'Aguafina Script', cursive; */
/* font-family: 'Rouge Script', cursive; */
/* // font-family: 'Roboto', sans-serif; */

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	height: 900px;
}

header {
	/* background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg'); */
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	/* border-radius: 0 0 85% 85% / 30%; */
}

header .overlay {
	width: 100%;
	height: 100%;
	/* padding: 50px; */
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
	background-image: linear-gradient(135deg, #37005a69 10%, #a53c036b 100%);

}

h1,
h2 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3,
p {
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 30px;
}

button {
	border: none;
	outline: none;
	padding: 10px 20px;
	border-radius: 50px;
	color: #333;
	background: #fff;
	margin-bottom: 50px;
	box-shadow: 0 3px 20px 0 #0000003b;
}

button:hover {
	cursor: pointer;
}
</style>