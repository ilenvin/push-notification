importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyDyQEGinFoh4QTCKqbjaIzAs52KygT4Q-c",
    authDomain: "fir-eaaae.firebaseapp.com",
    databaseURL: "https://fir-eaaae-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "fir-eaaae",
    storageBucket: "fir-eaaae.appspot.com",
    messagingSenderId: "740772828047",
    appId: "1:740772828047:web:4865596988c1e3439271fa",
    measurementId: "G-M5HCHM97GZ"
});
const messaging = firebase.messaging();