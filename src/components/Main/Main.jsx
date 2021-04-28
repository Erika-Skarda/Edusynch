import Image from 'next/image'
import styles from '../../styles/components/Main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={ faStar } />

export default function Main () {
  
  return (
    <>
    <main className={styles.main}>
      <div className={styles.main__div}>
        <Image
          className={styles.main__div__img}
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
        <div className={styles.main__div__div}>
          <div>
            <i className={styles.main__div__icon}>{star}</i>
            <i className={styles.main__div__icon}>{star}</i>
            <i className={styles.main__div__icon}>{star}</i>
            <i className={styles.main__div__icon}>{star}</i>
            <i className={styles.main__div__icon}>{star}</i>
          </div>
          <button className={styles.main__div__button}>10 LESSONS  </button>
        </div>
        <p className={styles.main__div__p}>
          Master English: Improve Your <br/>Speaking 
        </p>
      </div>
      
      
      <div className={styles.main__div}>
        <Image
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
      </div>
      <div className={styles.main__div}>
        <Image
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
      </div> 
      <div className={styles.main__div}>
        <Image
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
      </div>
      <div className={styles.main__div}>
        <Image
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
      </div>
      <div className={styles.main__div}>
        <Image
          src='/assets/teacher.svg'
          alt="Picture logo"
          width={335}
          height={163}
          quality={100}
        />
      </div>   
    </main>
    <span className={styles.loading}>Loading</span>
    </>
  )
}