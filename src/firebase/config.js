import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCo7jkqNI511ddxwTTtwKTh8iAfIeB36r8",
  authDomain: "recuperatoriosudesa2021.firebaseapp.com",
  projectId: "recuperatoriosudesa2021",
  storageBucket: "recuperatoriosudesa2021.appspot.com",
  messagingSenderId: "1004824801273",
  appId: "1:1004824801273:web:642d3c5863417ec5005728"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();