import React, {useEffect, useState, Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import { useDisclosure, ModalOverlay } from '@chakra-ui/react'
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Info from '../components/Info'
import Mobileheader from '../components/Mobileheader'
import LandingModal from '../components/LandingModal'
import LazyLoader from '../components/LazyLoader'


 export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
`
 
const OverlayOne = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropBlur='2px'
  />
)


function LandingPage() {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />)
 
  

  useEffect(()=>{
    setTimeout(()=> {
      setOverlay(<OverlayOne />)
      onOpen()
    }, 30000)
  }, [])
  
  const openMenu = () => {
    setShowMenu(true)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }
  return (
    <Suspense fallback={<LazyLoader />}>
   <Container >
    <LandingModal onClick={onClose} isOpen={isOpen} overlay={overlay}/>
       <Mobileheader  showMenu={showMenu} onClick={closeMenu} />
       <Header onClick={openMenu} className={showMenu ? 'open' : ''}/>
       <Outlet context={showMenu}/>
       {/* <Info className={showMenu ? 'open' : ''} /> */}
       <Footer className={showMenu ? 'open' : ''}/>
   </Container>
    </Suspense>
   
  
  )
}

export default LandingPage