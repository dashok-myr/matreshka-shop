import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjKa5CQYDM6aDjQMTqaBs2dm7VPu4Qslc",
  authDomain: "shopping-app-e75e1.firebaseapp.com",
  projectId: "shopping-app-e75e1",
  storageBucket: "shopping-app-e75e1.appspot.com",
  messagingSenderId: "112338573781",
  appId: "1:112338573781:web:be0c7cbeb425e6d35b855c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user data doesn't exist
  if (!userSnapshot.exists()) {
    //create / set the doc with the data from userAuth in my collection
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
