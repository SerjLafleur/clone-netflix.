
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDY-jidcy2fIryje5zY0fH9nqS0uIJ7fjU",
    authDomain: "clone-netflix-3b97d.firebaseapp.com",
    projectId: "clone-netflix-3b97d",
    storageBucket: "clone-netflix-3b97d.appspot.com",
    messagingSenderId: "462845936413",
    appId: "1:462845936413:web:7312b59d3cd02dccd117f4"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth()

export { auth }