// import firebase from "firebase/app";
// import "firebase/database";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-3q3bFn3acqc16dnjY1cWbxmQxkUqN40",
    authDomain: "vq-client.firebaseapp.com",
    databaseURL: "https://vq-client-default-rtdb.firebaseio.com",
    projectId: "vq-client",
    storageBucket: "vq-client.appspot.com",
    messagingSenderId: "837291930837",
    appId: "1:837291930837:web:4ffc4a8d383766fa141e5c",
    measurementId: "G-KVERC0TZYZ"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();
export default fireDb;