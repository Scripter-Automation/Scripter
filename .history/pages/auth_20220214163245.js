
/* globals window */
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { AuthAction, withAuthUser } from 'next-firebase-auth';


// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
        provider: GoogleAuthProvider.PROVIDER_ID,
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: (authResults) =>{
      // Don't automatically redirect. We handle redirects using
      // `next-firebase-auth`.
      
      console.log(authResults);
      const userInfo = authResults.additionalUserInfo;
      if(userInfo.isNewUser){
        
      }

      return false
    }
  },
}

 function Auth() {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
      setRenderAuth(true)
    
  }, [])
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={getAuth()}
        />
      ) : null}
    </div>
  )
}

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP
})(Auth)

