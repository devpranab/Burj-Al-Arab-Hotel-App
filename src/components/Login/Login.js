import React, {useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';                                     
import { useHistory, useLocation } from 'react-router-dom';
         
const Login = () => {
    // Context api
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation;

    let {from} = location.state || {from: {pathname: "/"}};

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
          history.replace(from);
        })
      }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign-in</button>
        </div>
    );
};

export default Login;