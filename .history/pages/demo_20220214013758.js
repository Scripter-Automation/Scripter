// ./pages/demo
import React from 'react'
import {
    AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { getAuth, signOut } from 'firebase/auth'
import Image from 'next/image'

const Demo = () => {
  const AuthUser = useAuthUser()
  //console.log(AuthUser)
  return (
    <div>
        <Image src={AuthUser.photoURL} width={48} height={48}></Image>
      <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
      <button onClick={()=>{signOut(getAuth())}}>Logout</button>
    </div>
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
})(Demo)