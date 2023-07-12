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

/*
   * Actual database, where we can store a record of signed in users.
   * Firestore data pattern: collection (*), document (**), data (***).
   ? Example:
   ?    * users
   ?       ** user
   ?          *** name: "Andri"
   ?          *** income: {unit: 4000, currency: "€"}
   * When creating our database through console by clicking "Create database",
   * it is best to select "Production mode".
   * After database is set up, we should define rules (under Tab "Rules").
   * Rules essentially say who is allowed to change what documents.

   * Back in our "firebase.js", we need to import necessary instances.
   ? "doc" - to retrieve documents from Firestore database (GET DOCUMENT).
   ? "getDoc" - get documents data from Firestore database (GET DATA).
   ? "setDoc" - set documents data to Firestore database (SET DATA).
   * "db" will be the starting point for "CRUD" operations.
*/

// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// ...

export const db = getFirestore();

// * will handle authenticated user response from front-end side
export const createUserDocumentFromAuth = async (userAuth) => {

   /*
      * We check for existing document, has 3 arguments: databse, collections, unique ID.
      * Usually from Google sign-in response we get unique ID from key ".uid".
      * with "userDocData" we can use a method called ".exists()" to check
      * if there is any data related to that specific document.
   */
   const userDocRef = doc(db, 'users', userAuth.uid);
   const userDocData =  await getDoc(userDocRef);
   console.log(userDocData.exists());
}