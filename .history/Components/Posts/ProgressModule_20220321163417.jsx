import React from 'react'
import {Modal, Typography} from "@mui/material"
import { Box } from '@mui/system'


export default function ProgressModule(props, {progress}) {


  


 if(progress !== 0){
     console.log("its here")
    return(
        <Modal
        open={true}
        >
        <Box>
        <Typography>{progress}</Typography>
        </Box>
        </Modal>
    )
 }else{
     return null
 }


}
