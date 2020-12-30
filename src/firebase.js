import firebase from "firebase";
const  firebaseConfig = {
  apiKey: "AIzaSyD6N6FbBYV-gSYx_ZTiuyaAQw7r0Q5aXMk",
  authDomain: "twitter-ff70b.firebaseapp.com",
  databaseURL: "https://twitter-ff70b.firebaseio.com",
  projectId: "twitter-ff70b",
  storageBucket: "twitter-ff70b.appspot.com",
  messagingSenderId: "489303156897",
  appId: "1:489303156897:web:d1f2a26a3c9081c10128e0",
  measurementId: "G-YB18LZLNN9"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

export default db;
