import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

 //breakpoints 
  
  /* Extra small devices (phones, 600px and down) */
  /* Small devices (portrait tablets and large phones, 600px and up) */
  //"360px"

  /* Medium devices (landscape tablets, 768px and up) */
  //"768px" 

  /* Large devices (laptops/desktops, 992px and up) */
  //"1024px",

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  //"1440px"

const breakpoints = createBreakpoints({
    sm: "360px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  })
const overrides = { breakpoints }
const customTheme = extendTheme(overrides)

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
