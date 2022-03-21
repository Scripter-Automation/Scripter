import React from 'react'
import {Modal, Typography} from "@mui/material"
import { Box } from '@mui/system'


export default function ProgressModule(props, {progress}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  


 if(progress !== 0){
     console.log("its here")
    return(
        <Modal
        open={true}
        >
        <Box sx={style}>
        <Typography>{progress}</Typography>
        </Box>
        </Modal>
    )
 }else{
     return null
 }


}
