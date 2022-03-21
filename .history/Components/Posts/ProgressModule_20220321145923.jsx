import React from 'react'
import {Modal, Typography} from "@mui/material"


export default function ProgressModule(props, {progress}) {

    
    const  [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(progress !== undefined){ setOpen(true);}
        else {setOpen(false)}

        console.log(progress)
    

    }, [progress])
    




 if(progress === "Subiendo Archivo"){
     console.log("its here")
    return(
        <Modal
        open={open}
        >
        <Typography>Se esta subiendo</Typography>
        </Modal>
    )
 }else if(progress === "El Archivo se ha subido exitosamente"){
        return (
            <Modal
            open={open}
            >
             <Typography>Se subio</Typography>
            </Modal>
        )
 }else{
     return null
 }


}
