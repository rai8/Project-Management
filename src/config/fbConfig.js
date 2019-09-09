import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAN9Mu2QCADgfUaXiz-YcCONE5sEeGJ3p8",
  authDomain: "project-management-4d177.firebaseapp.com",
  databaseURL: "https://project-management-4d177.firebaseio.com",
  projectId: "project-management-4d177",
  storageBucket: "",
  messagingSenderId: "144580492078",
  appId: "1:144580492078:web:bc9baf1aad1ad7b55598bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
