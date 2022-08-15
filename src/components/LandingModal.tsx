import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
  } from "@chakra-ui/react";
import GetStarted from "./GetStarted";
  
 
  
  export default function LandingModal(props : any) {
   


  
    return (
      
        <Modal isOpen={props.isOpen}  onClose={props.onClick} >
          {/* <ModalOverlay /> */}
          {props.overlay}
          <ModalContent>
            <ModalHeader style={{color: 'white'}}>Get Started!</ModalHeader>
            <ModalCloseButton style={{color: 'white'}} />
            <ModalBody>
              <GetStarted />
            </ModalBody>
          </ModalContent>
        </Modal>
    );
  }