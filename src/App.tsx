import {  ChakraProvider,
  extendTheme } from '@chakra-ui/react'
import store from './store'
import persistStore from 'redux-persist/es/persistStore'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexRoutes from './routes/index.routes'
import { HelmetProvider } from 'react-helmet-async'
import useApp from './context/app'
import GlobalStyle from './globalStyles'
import Home from './components/Home'
import PostRequest from './pages/PostRequest'
import CallUs from './pages/CallUs'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faqs'
import LandingPage from './pages/LandingPage'
import RequestCall from './pages/RequestCall'
import NotFound from './pages/404'

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
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
          <Route
          path='/'
          element={ <IndexRoutes>
            <LandingPage />
          </IndexRoutes>}>
            <Route
            path='/'
            element={<Home />}></Route>
            <Route
            path='/Post'
            element={<PostRequest />}></Route>
            <Route
            path='/Request'
            element={<RequestCall />}></Route>
            <Route
            path='/Call'
            element={<CallUs />}></Route>
            <Route
            path='/Contact-us'
            element={<ContactUs />}></Route>
            <Route
            path='/Faq'
            element={<Faqs />}></Route>
          </Route>
            <Route
            path='/*'
            element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </ChakraProvider>
  )
}

export default App
