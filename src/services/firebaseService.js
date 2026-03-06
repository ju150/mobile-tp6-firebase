import { app } from "../main.jsx"; 
import { getDatabase, ref , set } from "firebase/database";


export function getFirebaseRef(path) { 
    const db = getDatabase(app); 
    return ref(db, path); 
} 

export function updateFirebaseValue(path, value) {
    set(getFirebaseRef(path), value)
}