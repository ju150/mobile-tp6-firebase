import { app } from "../main.jsx"; 
import { getDatabase, ref , set, push } from "firebase/database";


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