import React from 'react'
import {Modal, Typography} from "@mui/material"


export default function ProgressModule(props, {progress}) {


  


 if(progress !== undefined){
     console.log("its here")
    return(
        <Modal
        open={open}
        >
        <Typography>{progress}</Typography>
        </Modal>
    )
 }else{
     return null
 }


}
