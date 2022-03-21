import React from 'react'
import {Modal} from "@mui/material"


export default function ProgressModule(props, {progress}) {

    
    const  [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(progress !== undefined){ setOpen(true);}
        else {setOpen(false)}
    

    }, [progress])
    




 if(progress === "Subiendo Archivo"){
     console.log("its here")
    return(
        <Modal
        open={open}
        >

        </Modal>
    )
 }else if(progress === "El Archivo se ha subido exitosamente"){
        return (
            <Modal
            open={open}
            >

            </Modal>
        )
 }else{
     return null
 }


}
