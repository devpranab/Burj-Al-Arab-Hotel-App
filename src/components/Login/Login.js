import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
// Initialize Firebase
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        console.log("handleSignIn clicked");
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, photoURL, email} = res.user;
          console.log(displayName, photoURL, email);
        })
      }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign-in</button>
        </div>
    );
};

export default Login;