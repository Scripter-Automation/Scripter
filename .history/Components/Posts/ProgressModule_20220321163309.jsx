import React from 'react'
import {Modal, Typography} from "@mui/material"


export default function ProgressModule(props, {progress}) {


  


 if(progress !== 0){
     console.log("its here")
    return(
        <Modal
        open={true}
        >
        <Typography>{progress}</Typography>
        </Modal>
    )
 }else{
     return null
 }


}
