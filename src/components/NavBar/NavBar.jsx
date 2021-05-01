import { useState } from 'react'
import Image from 'next/image'
import ModalComponent from '../Modal/Modal.jsx'

import styles from '../../styles/components/NavBar.module.css'

import {
  Menu,
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';


export default function NavBar(props) {
  
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  const MenuItems = ({ children }) => (
    <Text 
      mt={{ base: 4, md: 0 }}
      ml={5} 
      display="block"
      fontSize={{ sm: show ? "21px" : "", md: '14px'}}
    >
      {children}
    </Text>
  );

  return (
    <Menu>
      <Flex
        as="nav"
        zIndex={10}
        align="center"
        justify="space-between"
        wrap="wrap"
        position={{ base:"block", sm: show ? "relative" : ""}}
        h={{ sm: show ? "100vh" : "", md: "60px"}}
        bg={{lg: "transparent",md: 'transparent', sm: show ? "#200E64" : "transparent"}}
        color="#FFFFFF"
        {...props}
      >
        <Flex 
          align="center" 
          ml={3} 
          p={['1.5rem']}
          position={{ sm: show ? "relative" : ""}}
          bottom={{ sm: show ? "145px" : ""}}
        >
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
        <Box 
          className={styles.box__first} 
          p={['1.5rem']} 
          position={{ sm: show ? "relative" : ""}}
          bottom={{ sm: show ? "145px" : ""}}
          >
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              onClick={handleToggle}
              color="white"
              bg={useColorModeValue('transparent')}
              _active={{
                background: "#7A57FD",
                color: "white",
              }}
              icon={
                show ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Box>
        </Box>

        <Box
          display={{ sm: show ? "flex" : "none", md: "flex" }}
          flexDirection={{ sm: show ? "column" : "row", md: "row" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justifyContent={{ md: "space-evenly"}}
          mb={3}
          position={{ sm: show ? "relative" : ""}}
          bottom={{ sm: show ? "230px" : ""}}
        >
            <MenuItems>How it works</MenuItems>
            <MenuItems>About us</MenuItems>
            <Box mt={{ base: 4, md: 0 }}><ModalComponent/></Box>
        </Box>
  
      </Flex>
    </Menu>
  );
};


