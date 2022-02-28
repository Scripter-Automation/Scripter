import '../styles/globals.css'
import initAuth from '../initAuth'
import ResponsiveDrawer from '../Components/NavBar/ResponsiveNavBar'
import { ThemeProvider } from '@mui/system'
import theme from "../styles/themeConfig"
import {useRouter} from "next/router"
import NoSessionNavBar from '../Components/NavBar/NoSesionNavBar'
import Container from '../Components/NavBar/Container'



initAuth()

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.pathname === "/" || router.pathname === "/auth" ){
    return (
      <div>
        <ThemeProvider theme={theme}>
          <NoSessionNavBar>
          </NoSessionNavBar>
              <Component {...pageProps} />
        </ThemeProvider>
      </div>
    )
  }else{
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Component {...pageProps} />
        </ResponsiveDrawer>
      </ThemeProvider>
    </div>
  )
  }
}

export default MyApp
