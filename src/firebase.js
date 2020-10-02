import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBDTmwOSkVGmKEKEFx_TvSD8Q9TT7Vhk0",
    authDomain: "instagram-reels-8f6fb.firebaseapp.com",
    databaseURL: "https://instagram-reels-8f6fb.firebaseio.com",
    projectId: "instagram-reels-8f6fb",
    storageBucket: "instagram-reels-8f6fb.appspot.com",
    messagingSenderId: "973355395813",
    appId: "1:973355395813:web:6007b104524ab0ca7cc20c",
    measurementId: "G-NH9HNEJZL8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default db;