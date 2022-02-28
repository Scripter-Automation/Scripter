
import {getFirestore, updateDoc, doc, setDoc, getDoc } from "firebase/firestore"

const db = getFirestore();

export function GenerateRole(user){
    const useDoc = doc(db, `roles/${user.uid}`)
    console.log("this ran", useDoc, process.env.PUBLIC_ROLE_DEFAULT)

    setDoc(useDoc, {role: "Basic"})

}

export function UpgrdeUser(role, user){
    
    const UseDoc = doc(db, `roles/${user.uid}`)
    
    updateDoc(UseDoc, {role:role})
}

export function getRole(user){

    const UseDoc = doc(db, `roles/${user.uid}`)
    var result;
    getDoc(UseDoc).then((e)=>{
        result = e.data().role
    })
    

    return result
}
