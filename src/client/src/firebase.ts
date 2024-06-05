// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'marites-57e92.firebaseapp.com',
    projectId: 'marites-57e92',
    storageBucket: 'marites-57e92.appspot.com',
    messagingSenderId: '1072417137257',
    appId: '1:1072417137257:web:a85657b0586134a137b8f8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
