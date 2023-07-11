// TODO: FIREBASE (by Google)

/*
   * Firebase is a Google platform that allows us to spin up a prebuilt database,
   * without us configuring one from scratch.
   ! To get started with Firebase in our app, we need to install: "npm i firebase"
   * We could store Firebase in a separate folder called "utils/firebase" and call
   * the file "firebase.utils.js".
*/

// TODO: MAIN SETUP

import { initializeApp } from 'firebase/app';
/*
   * "initializeApp" creates app instance.
   * That instance needs to connect to our "Web App", which
   * is hosted on Firebase Console.
   * After we create our "Web App", we receive a basic configuration object.
   * That object contains all necessary instances to our project.
   ? Project "TravelPoint" was used for DEMO purposes only
*/
const firebaseConfig = {
  apiKey: "AIzaSyC44cV00fIr2js7EKsRw4fIb0HDO55t9ic",
  authDomain: "travelpoint-2023.firebaseapp.com",
  projectId: "travelpoint-2023",
  storageBucket: "travelpoint-2023.appspot.com",
  messagingSenderId: "362905468828",
  appId: "1:362905468828:web:9ee0cf474f2a5d70f01259"
};

// * initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);



// TODO: AUTHENTICATION

/*
   * Authentication is a way to identify that you are who you say you are 
   * for application access.
   * We need to set up a provider to be able to use authentication services.
   * Once we have our provider, we need to configure it by using ".setCustomParameters", 
   * telling which authentication method we prefer.
*/

// import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// ...

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



// TODO: AUTHENTICATION IN CONSOLE

/*
   * Go to "Authentication", "Sign-in method" and pick "Google".
   * We need to enable the main option.
*/









// TODO: FIRESTORE DATABASE (CONSOLE)