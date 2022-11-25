import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	//that is like some key to authentication
	apiKey: "AIzaSyDp1rMq3CPn8UT2aaM01E5UWp__PpUUrKw",
	authDomain: "netflix-clone-73ff4.firebaseapp.com",
	projectId: "netflix-clone-73ff4",
	storageBucket: "netflix-clone-73ff4.appspot.com",
	messagingSenderId: "216757868267",
	appId: "1:216757868267:web:c99846d8895543b4fc90ae",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore(); // real time database to keep track on state of user subscription
const auth = firebase.auth();

export { auth, db };
