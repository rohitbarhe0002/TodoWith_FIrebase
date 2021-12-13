import firebase from 'firebase/app';
import firebase from 'firestore';
const firebaseConfig = firebase.initiallizeApp({
    apiKey: "AIzaSyCcJxLDits7viTaiEhfwPEeJohNTw8oTO4",
    authDomain: "todo-with-firebse.firebaseapp.com",
    projectId: "todo-with-firebse",
    storageBucket: "todo-with-firebse.appspot.com",
    messagingSenderId: "240127232767",
    appId: "1:240127232767:web:4e2a0c55fbe819460f1aca",
 

})
 
export {firebaseConfig as firebase}