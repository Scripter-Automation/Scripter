import React from 'react'
import {Modal} from "@mui/material"


export default function ProgressModule(props) {

    
    const  [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(props.progress !== undefined){ setOpen(true);}
        else {setOpen(false)}
    

    }, [props.progress])
    




 if(props.progress === "Subiendo Archivo"){
     console.log("its here")
    return(
        <Modal
        open={open}
        >

        </Modal>
    )
 }else if(props.progress === "El Archivo se ha subido exitosamente"){
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
