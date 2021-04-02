import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcQFA_5eUDufkMxqK8qyOZxtZQLPU6Pjw",
    authDomain: "challenge-b6e56.firebaseapp.com",
    databaseURL: "https://challenge-b6e56.firebaseio.com",
    projectId: "challenge-b6e56",
    storageBucket: "challenge-b6e56.appspot.com",
    messagingSenderId: "727050042096",
    appId: "1:727050042096:web:be4617304e0079e6f12035",
    measurementId: "G-7JRY25L1MK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };