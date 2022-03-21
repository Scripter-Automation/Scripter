import { Button, Card, Container, Grid, TextField } from '@mui/material'
import React, {useState} from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SendIcon from '@mui/icons-material/Send';
import ProgressModule from './ProgressModule';
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export default function PostBar() {
  const [response, setResponse] = useState(undefined)

  const [progress, setProgress] = useState(undefined)

  const [postData, setpostData] = useState({
    Text:undefined,
    Image: undefined,
    Video:undefined

  })

  const Upload = async (image) => {

    const [downloaded, setDownloaded] = useState(undefined)

    const storage = getStorage();
    const referencia = ref(storage, `posts/${image.name}`);

    const uploadTask = uploadBytesResumable(referencia, image);

    uploadTask.on("state_changed", (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    }, ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setDownloaded(downloadURL)
      }
      )
    })
    

    var url = await getDownloadURL(referencia)
    setResponse(url)



};

  const HandleArchivo =  async (e, type)=>{
    if (type === "Image") {
      
      await Upload(e.target.files[0])

      const image = response
     
      setpostData({...postData, Image:image })
      setResponse(undefined)

    }
    else if (type === "Video") {
      
      await Upload(e.target.files[0])

      const video = response 

      setpostData({...postData, Video:video})
      setResponse(undefined)
  }}

  const SubmitHandler = (e)=>{
    e.preventDefault()
    console.log("viendo la data",postData)

   
    
  }


  return (

    <>
    <ProgressModule progress={progress} setProgress={setProgress}></ProgressModule>
    <Card >
      <form onSubmit={SubmitHandler}>
    <Container sx={{mt:2, mb:2}}>
    <Grid container >
      <Grid item xs={12}>

            <TextField
            value={postData.Text}
            name="Text"
            variant='filled'
            multiline
            maxRows={4}
            fullWidth
            placeholder='Comenta tus ideas'
            onChange={(e)=>{setpostData({...postData, Text: e.target.value,})}}
            />

      </Grid>
    
      <Grid  xs={12} item container display="flex" flexWrap={true} justifyContent="space-between"
      >
        <Grid sx={{mt:2}} item>
          <Button variant="contained" startIcon={<AssignmentIcon/>}>Articulo</Button>
        </Grid>
        <Grid sx={{mt:2}} item>
          <Button type="file" variant="contained" component="label" startIcon={<ImageIcon/>}>   
          <input
           type="file"
           accept='image/*'
          hidden
          onChange={(e)=>HandleArchivo(e,"Image")}
           />
          Imagen
          </Button>
          
        </Grid>
        <Grid  sx={{mt:2}} item>
          <Button variant="contained"  component="label" startIcon={<OndemandVideoIcon/>}>
          <input
           type="file"
           accept='video/*'
          hidden
          onChange={(e)=> HandleArchivo(e,"Video")}
           />
            
            Video</Button>
          
        </Grid>
        <Grid sx={{mt:2}} item>

          <Button variant="contained" type="submit" startIcon={<SendIcon/>}>Publicar</Button>
          
        </Grid>
      </Grid>
    </Grid>
    </Container>
    </form>
    </Card>
    </>
  )
}
