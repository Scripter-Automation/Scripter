// ./pages/demo
import React from 'react'
import {
    AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import PostBar from '../Components/Posts/PostBar'
import AddBar from '../Components/Advertisments/AddBar'
import {Grid, Box} from "@mui/material"

const Feed = () => {
  const AuthUser = useAuthUser()
  //console.log(AuthUser)
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <PostBar></PostBar>
      </Grid>
      <Box
        sx={{ml:3}}
        component={Grid}
        item
        xs={0}
        md={3}
        display={{ xs: "none", md: "block" }}
      >
        <AddBar></AddBar>
      </Box>
    </Grid>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(context =>{
    return{
        props:{}
    }
})

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Feed)