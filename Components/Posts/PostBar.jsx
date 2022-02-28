import { Button, Card, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SendIcon from '@mui/icons-material/Send';

export default function PostBar() {
  return (
    <Card >
    <Container sx={{mt:2, mb:2}}>
    <Grid container >
      <Grid item xs={12}>
        <TextField
        variant='filled'
        multiline
        maxRows={4}
        fullWidth
        placeholder='Comenta tus ideas'
        />
      </Grid>
    
      <Grid sx={{mt:2}} xs={12} item container columnSpacing={11}
      >
        <Grid item xs={3}>
          <Button variant="contained" startIcon={<AssignmentIcon/>}>Articulo</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" startIcon={<ImageIcon/>}>Imagen</Button>
          
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" startIcon={<OndemandVideoIcon/>}>Video</Button>
          
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" startIcon={<SendIcon/>}>Publicar</Button>
          
        </Grid>
      </Grid>
    </Grid>
    </Container>
    </Card>
  )
}
