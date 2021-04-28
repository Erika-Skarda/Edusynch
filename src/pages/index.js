import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar/NavBar.jsx'
import Input from '../components/Input/Input.jsx'
import ButtonComponent from '../components/Button/Button.jsx'
import styles from '../styles/pages/Home.module.css'
import {
  RadioGroup,
  Radio,
  HStack,
  Box,
} from "@chakra-ui/react"

export default function Home() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState(" I'M A TEACHER")

  return (
    <div className={styles.container}>
     
      <Head>
        <title>Eduick</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}> 
        <NavBar/>
        <section className={styles.main__section}>
          <div className={styles.main__img}>
            <Image
            
              src='/assets/left/main.png'
              alt="Main Picture"
              width={550}
              height={766}
            />
          </div>
          <div className={styles.main__img__mobile}>
            <Image
              src='/assets/left/mobile.svg'
              alt="Main Picture"
              width={500}
              height={766}
            />
          </div>

          <div className={styles.main__div}>
            <div className={styles.img__mobile}>
              <Image
                src='/assets/right/Find.png'
                alt="Text Find Best Teacher"
                width={334}
                height={102}
              />
            </div>
            <p className={styles.main__div__p}>
              Whether you are a student trying to find your ideal private<br/> 
              language teachers/tutors or a teacher trying to find great students<br/> 
              for your customized private lessons!
            </p>
            <form className={styles.main__div__form}>
              <Input
                id="nome"
                type="text"
                placeholder="Type here what are you looking for"
                value={search}
                setValue={setSearch}
                sm={true}
              />
                <div className={styles.main__div__radio}>
                  <RadioGroup defaultValue="teacher">
                    <HStack justifyContent='space-between'>
                      <Box 
                        p='10px' 
                        border="1px" 
                        borderColor="#A68EEF" 
                        h={'56px'}
                        borderRadius='4px'
                        width={{ sm:'50%', md: "auto" }}
                      >
                        <Radio 
                          value="teacher"
                          verticalAlign="-webkit-baseline-middle"
                          _checked={{ bg: 'yellow' }}
                        ><p className={styles.radio__p}>I'M A TEACHER</p></Radio>
                      </Box>
                      <Box 
                        p='10px' 
                        border="1px" 
                        borderColor="#A68EEF" 
                        h={'56px'}
                        borderRadius='4px'
                        width={{ sm:'50%', md: "auto" }}
                      >
                        <Radio 
                          value="student"
                          verticalAlign="-webkit-baseline-middle"
                          _checked={{ bg: 'yellow'}}
                          ><p className={styles.radio__p}>I'M A STUDENT</p> </Radio>
                      </Box>
                    </HStack>
                  </RadioGroup>
                  <ButtonComponent text={"SEARCH"} lg={true}/>
                </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
