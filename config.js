import firebase from "firebase";
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyB_wzJH2gRykxI5iF30y0u3p4OXSZNvAkQ",
  authDomain: "hospital-yusuf.firebaseapp.com",
  projectId: "hospital-yusuf",
  storageBucket: "hospital-yusuf.appspot.com",
  messagingSenderId: "264540037943",
  appId: "1:264540037943:web:4c1d0b24cb094e9f6170b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();