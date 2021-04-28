import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/components/Modal.module.css'
import ButtonComponent from '../Button/Button'
import Input from '../Input/Input'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"

export default function ModalComponent() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()
  const finalRef = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <ButtonComponent onClick={onOpen} text={"Get Started"} sm={true}/>
      
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        className={styles.modal}
        h={{sm: '100vh'}}
      >
        <ModalOverlay />
        <ModalContent bg="#6A40E4">
          <ModalHeader>
          <Image
              src='/assets/login.png'
              alt="Get Started Image"
              width={160}
              height={60}
            />
          </ModalHeader>
          <ModalCloseButton 
            w={50} 
            h={50} 
            color="white"
            borderRadius='50%'
            border='1px solid #200E64'
            bg="#200E64"
          />
          <ModalBody pb={6}>
            <FormControl className={styles.modal__label}>
              <Input
                id="username"
                label="Username: "
                type="text"
                value={username}
                setValue={setUsername}
                ref={initialRef}
                required
                lg={true}
              />
            </FormControl>

            <FormControl mt={4} className={styles.modal__label}>
            {" "}
              <Input
                id="password"
                label="Password: "
                type={passwordShown ? "text" : "password"}
                //ref={register({ required: "This is required." })}
                value={password}
                setValue={setPassword}
                lg={true}
              />
              {passwordShown ? (
                <i className={styles.modal__label__icon} onClick={togglePasswordVisibility}>{eye}</i>
                ) : (
                <i className={styles.modal__label__icon} onClick={togglePasswordVisibility}>{eyeSlash}</i>
              )}
            </FormControl> 
          </ModalBody>

          <ModalFooter>
            <ButtonComponent text={"LOGIN"} sm={true} onClick={handleSubmit(onSubmit)}/>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  )
}