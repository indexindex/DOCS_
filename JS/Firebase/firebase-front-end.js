// TODO: FIRESTORE ON FRONT-END SIDE

/*
   * We need to import our sign-in method, which could later
   * be called by click event to trigger activation function
   * "logGoogleUser".
*/

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "./firebase";

const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
}



/*
   * With redirect method, we need another button to call another function
   * "signInWithGoogleRedirect".
   ! With redirect method, we need another approach to capture data that was
   ! present on another page.
   * To capture redirect data, we use "getRedirectResult" function.
   * "useEffect" initially is "null" on first mount, but after redirect
   * happens, and application mounts again, we will have a user data.
*/
import { useEffect } from 'react';
import { getRedirectResult, createAuthUserWithEmailAndPassword } from 'firebase/auth';

// const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, [])