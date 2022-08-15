import React, {useEffect, useState} from 'react'
import { useDisclosure, ModalOverlay } from '@chakra-ui/react'
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Earn from '../components/Earn'
import EarnSub from '../components/EarnSub'
import FAQ from '../components/FAQ'
import Info from '../components/Info'
import Mobileheader from '../components/Mobileheader'
import LandingModal from '../components/LandingModal'


const Container = styled.div`
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

function Home() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />)
 
  

  useEffect(()=>{
    setTimeout(()=> {
      setOverlay(<OverlayOne />)
      onOpen()
    }, 3000)
  }, [])
  
  const openMenu = () => {
    setShowMenu(true)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }
  return (
    <Container >
    <LandingModal onClick={onClose} isOpen={isOpen} overlay={overlay}/>
       <Mobileheader  showMenu={showMenu} onClick={closeMenu} />
       <Header onClick={openMenu} className={showMenu ? 'open' : ''}/>
       <Hero className={showMenu ? 'open' : ''} />
       <Earn className={showMenu ? 'open' : ''} />
       <EarnSub className={showMenu ? 'open' : ''}/>
       <FAQ className={showMenu ? 'open' : ''} />
       <Info className={showMenu ? 'open' : ''} />
       <Footer className={showMenu ? 'open' : ''}/>
   </Container>
  
  )
}

export default Home