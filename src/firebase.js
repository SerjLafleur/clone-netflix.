
// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDY-jidcy2fIryje5zY0fH9nqS0uIJ7fjU",
//     authDomain: "clone-netflix-3b97d.firebaseapp.com",
//     projectId: "clone-netflix-3b97d",
//     storageBucket: "clone-netflix-3b97d.appspot.com",
//     messagingSenderId: "462845936413",
//     appId: "1:462845936413:web:7312b59d3cd02dccd117f4"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const auth = firebase.auth()
// export { auth }

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDY-jidcy2fIryje5zY0fH9nqS0uIJ7fjU",
    authDomain: "clone-netflix-3b97d.firebaseapp.com",
    projectId: "clone-netflix-3b97d",
    storageBucket: "clone-netflix-3b97d.appspot.com",
    messagingSenderId: "462845936413",
    appId: "1:462845936413:web:7312b59d3cd02dccd117f4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth }