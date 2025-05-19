// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAmlkYmoyXDlRji9Y94qiDxkI9Mya0puiE",
  authDomain: "stock-monitor-13b3b.firebaseapp.com",
  projectId: "stock-monitor-13b3b",
  storageBucket: "stock-monitor-13b3b.firebasestorage.app",
  messagingSenderId: "501845262696",
  appId: "1:501845262696:web:5492c5083f247b394356dd",
  measurementId: "G-QQPFT9QTNG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
