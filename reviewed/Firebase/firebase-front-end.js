// TODO: FIRESTORE ON FRONT-END SIDE

/*
   * We need to import our sign-in method, which could later
   * be called by click event to trigger activation function
   * "logGoogleUser".
*/

import { signInWithGooglePopup, createUserDocumentFromAuth } from "./firebase";

const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
}