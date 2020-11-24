import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD6QQL3mlJZYrufXpmZCrl_lhZj99_IxGY",
    authDomain: "mynew-4e6e5.firebaseapp.com",
    databaseURL: "https://mynew-4e6e5.firebaseio.com",
    projectId: "mynew-4e6e5",
    storageBucket: "mynew-4e6e5.appspot.com",
    messagingSenderId: "651010853919",
    appId: "1:651010853919:web:41dc6f365261236abe992a",
    measurementId: "G-PNBP7JBBMW"
};
firebase.initializeApp(firebaseConfig);

export default firebase;