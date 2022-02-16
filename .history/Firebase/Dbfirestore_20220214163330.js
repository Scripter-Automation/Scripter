
import {collection, getFirestore, getDoc, addDoc} from "firebase/firestore"

const db = getFirestore();
const roles = collection(db, "roles")

export function GenerateRole(user){

    addDoc(roles, {UserId: user.uid, role: "basic"})

}