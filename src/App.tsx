import store from './store'
import persistStore from 'redux-persist/es/persistStore'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes } from 'react-router-dom'
import IndexRoutes from './routes/index.routes'
import { HelmetProvider } from 'react-helmet-async'
import useApp from './context/app'
import GlobalStyle from './globalStyles'
import {  ChakraProvider,
  extendTheme } from '@chakra-ui/react'

function App() {
  const { pageTitle } = useApp();
  const persistor = persistStore(store)
  const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props: {}) => ({
          dialog: {
            maxWidth: ["65%", "65%", "65%"],
            minWidth: "50%",
            bg: "#141520"
          }
        })
      }
    }
  });
  return (
    <ChakraProvider theme={theme}>
    <HelmetProvider>
      <Helmet>
        <title> {pageTitle} | Prevet </title>
      </Helmet>
      <BrowserRouter>
        <GlobalStyle />
        <IndexRoutes />
      </BrowserRouter>
    </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
