import React, { useState } from "react";
import Image from 'next/image'
import { useDisclosure } from "@chakra-ui/react"
import { 
        Box,  
        Flex, 
        Text, 
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styles from '../../styles/components/Menu.module.css'

const arrowDown = <FontAwesomeIcon icon={ faChevronDown } />
const arrowUp = <FontAwesomeIcon icon={ faChevronUp } />
const arrowRight  = <FontAwesomeIcon icon={ faArrowRight } />

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }}  ml={5} display="block">
    {children}
  </Text>
);

export default function Menu(props) {

  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="#7A57FD"
        color="#FFFFFF"
        {...props}
      >
        <Flex align="center" ml={3} p={['1.5rem']}>
          <Box mr={30} display={{ base: 'none', sm: "none", md: "flex" }}>
            <Image
              src='/assets/dots.png'
              alt="dot"
              width={67}
              height={33}
              quality={100}
            />  
          </Box>
          <Box>
            <Image
              src='/assets/logo.svg'
              alt="Logo"
              width={140}
              height={30}
              quality={100}
            />
          </Box>
        </Flex>

        <Box className={styles.box__first} p={['1.5rem']} >
          <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
            {show 
              ? <i className={styles.box__icon}>{arrowUp}</i> 
              : <i className={styles.box__icon} onClick={onOpen}>{arrowDown}</i>
            }
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <div className={styles.box__dot}></div>
            <img 
              src="https://github.com/Erika-Skarda.png" 
              alt="Erika" 
              className={styles.box__img}
            />
          </Box>
        </Box>
        
        <Box
          display={{ sm:"none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems>My Classes</MenuItems>
        </Box>

        <Box
          display={{  md: "flex" }}
          p={['1.5rem']}
          className={styles.box__second}
        >
      
          <button className={styles.box__button}>
            CHANGE TO TEACHER MODE
          </button>
    
          <Box display={{ sm: "none", md: "flex" }} >
            <img 
              src="https://github.com/Erika-Skarda.png" 
              alt="Erika" 
              className={styles.box__img}
            />
            <div className={styles.box__dot}></div>
          </Box>
        </Box>


        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay bg={'rgba(255, 255, 255, 0.80)'} mt={'75px'}>
            <DrawerContent mt={'75px'}> 
              <Box
                display={{ sm: show ? "flex" : "none" }}
                p={['1.5rem']}
                className={styles.box__second__mobile}
              >
             
                  <button className={styles.box__button}>
                    CHANGE TO TEACHER MODE <i className={styles.box__icon}>{arrowRight}</i>
                  </button>
          
                <Box display={{ sm: "none", md: "flex" }} >
                  <img 
                    src="https://github.com/Erika-Skarda.png" 
                    alt="Erika" 
                    className={styles.box__img}
                  />
                  <div className={styles.box__dot}></div>
                </Box>
              </Box>
            </DrawerContent>
          </DrawerOverlay> 
        </Drawer> 
      </Flex>
    </>
  );
};


