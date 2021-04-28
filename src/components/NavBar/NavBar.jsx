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

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }}  ml={5} display="block">
    {children}
  </Text>
);

export default function NavBar(props) {

  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Menu>
      <Flex
        as="nav"
        zIndex={10}
        align="center"
        justify="space-between"
        wrap="wrap"
        // h={{ sm: show ? "100vh" : ""}}
        bg={{lg: "transparent",md: 'transparent', sm: show ? "#200E64" : "transparent"}}
        color="#FFFFFF"
        {...props}
      >
        <Flex align="center" ml={3} p={['1.5rem']}>
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
        >
            <MenuItems>How it works</MenuItems>
            <MenuItems>About us</MenuItems>
            <MenuItems><ModalComponent/></MenuItems>
        </Box>
  
      </Flex>
    </Menu>
  );
};


