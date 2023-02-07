
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyC0v46OP3N1mtVvfyiqMGquZcrTY2LQrmY",
    authDomain: "auth-153db.firebaseapp.com",
    projectId: "auth-153db",
    storageBucket: "auth-153db.appspot.com",
    messagingSenderId: "908671099494",
    appId: "1:908671099494:web:638e8f222ebd422eb903a7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })
}