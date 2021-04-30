import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase" ;


firebase.initializeApp({
  apiKey: "AIzaSyA53PghrOmOjbbfmDEsOlgv3EV4q49f9AE",
  authDomain: "evernote-clone-6ce1b.firebaseapp.com",
  projectId: "evernote-clone-6ce1b",
  storageBucket: "evernote-clone-6ce1b.appspot.com",
  messagingSenderId: "713363442367",
  appId: "1:713363442367:web:6cea21c3544322bc73d40a"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
