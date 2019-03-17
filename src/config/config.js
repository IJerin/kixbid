import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyA_XhqJ9cDpTRc6ftwgQmgNBomkj7awEG4",
	authDomain: "kicksbid-ad898.firebaseapp.com",
	databaseURL: "https://kicksbid-ad898.firebaseio.com",
	projectId: "kicksbid-ad898",
	storageBucket: "kicksbid-ad898.appspot.com",
	messagingSenderId: "354866064338",
};

firebase.initializeApp(config);

export default firebase;