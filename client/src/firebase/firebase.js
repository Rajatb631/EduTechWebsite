// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0qSr9cuT8w4O9is4V3hcV7UP1VVe0zv4",
    authDomain: "edtechstartup-442e4.firebaseapp.com",
    projectId: "edtechstartup-442e4",
    storageBucket: "edtechstartup-442e4.firebasestorage.app",
    messagingSenderId: "531708472664",
    appId: "1:531708472664:web:ae13ac2acf3fb9be8c492d",
    measurementId: "G-Z7KE3Q61CV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
