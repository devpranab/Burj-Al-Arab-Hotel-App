import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';


const Login = () => {
    // Context api
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    // Initialize Firebase
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
      }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
          const {displayName, email} = result.user;
          const signInUser = {name:displayName, email};
          setLoggedInUser(signInUser);
        })
      }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign-in</button>
        </div>
    );
};

export default Login;