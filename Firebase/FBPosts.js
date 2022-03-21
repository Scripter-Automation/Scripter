import { PhpRounded } from "@mui/icons-material";
import {getFirestore, updateDoc, doc, setDoc, getDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

const db = getFirestore();


// Create a root reference
const storage = getStorage();

// Create a reference to 'mountains.jpg'
export const Upload = async (image, progress) => {
    const storage = getStorage();
    const referencia = ref(storage, `posts/${image.name}`);

    progress("Subiendo Archivo")

    await uploadBytes(referencia, image);
    const preresponse = await getDownloadURL(referencia)

    const response = toString(preresponse)
    console.log(response)
    progress("El Archivo se ha subido exitosamente")

    return response

};

