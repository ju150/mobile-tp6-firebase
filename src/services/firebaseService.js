import { app } from "../main.jsx";
import { getDatabase, ref , set, push } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


export function getFirebaseRef(path) { 
    const db = getDatabase(app); 
    return ref(db, path); 
} 

export function updateFirebaseValue(path, value) {
    set(getFirebaseRef(path), value)
}

export function addFirebaseItem(path, value) {
    push(getFirebaseRef(path), value)
}

export function signInWithGoogle() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export function signOutUser() {
    const auth = getAuth(app);
    return signOut(auth);
}