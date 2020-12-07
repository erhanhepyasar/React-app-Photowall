  import * as firebase from 'firebase'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCItqQQiCHN71HYk5wSeDt-KB0M5IdIwu4",
    authDomain: "photowall-a2b36.firebaseapp.com",
    databaseURL: "https://photowall-a2b36-default-rtdb.firebaseio.com",
    projectId: "photowall-a2b36",
    storageBucket: "photowall-a2b36.appspot.com",
    messagingSenderId: "147297254091",
    appId: "1:147297254091:web:cac26931d39bab5828794e",
    measurementId: "G-S4TS76VW9K"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database} 