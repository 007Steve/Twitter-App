import firebase from "firebase";
const  firebaseConfig = {
    apiKey: "AIzaSyC5hBD8PxeIBrijQbUD_tbhJUjbOf3_Gw4",
    authDomain: "twitter-clone-caf6f.firebaseapp.com",
    databaseURL: "https://twitter-clone-caf6f.firebaseio.com",
    projectId: "twitter-clone-caf6f",
    storageBucket: "twitter-clone-caf6f.appspot.com",
    messagingSenderId: "776817939107",
    appId: "1:776817939107:web:dec66158973758b7b8a516",
    measurementId: "G-VBV3C30YB1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

export default db;
