import React from 'react'
import {Modal, Typography, CircularProgress, Button} from "@mui/material"
import { Box } from '@mui/system'


export default function ProgressModule(props) {

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
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
      };

  


 if(props.progress !== 0){
    return(
        <Modal
        open={true}
        >
        <Box sx={style}>
        <Typography>Tu archivo se esta cargando</Typography>
        <Typography>{Math.round(props.progress)}%</Typography>
        <CircularProgress />
        {props.progress === 100 ? < Button variant="contained">Ok</Button> : null }
        </Box>
        </Modal>
    )
 }else{
     return null
 }


}
