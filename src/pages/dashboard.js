import Head from 'next/head'

import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

import styles from '../styles/pages/Dashboard.module.css'

export default function Dashboard() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduick - Dashboard</title>
      </Head>

      <div>
        <Menu/>
        <main className={styles.main}>
          <Header/>
          <Main/>
        </main>
        <Footer />    
      </div>
    </div>
  )
}
