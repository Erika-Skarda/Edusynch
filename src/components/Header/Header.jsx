import Image from 'next/image'
import styles from '../../styles/components/Header.module.css'

export default function Header () {

  return (
    <header className={styles.header}>
      <div className={styles.header__div}>
        <div className={styles.header__div__div}>
          <Image
            src='/assets/dashboard/gotas.svg'
            alt="Picture of yellow drops"
            width={126}
            height={150}
            quality={100}
          />
        </div>
        <div className={styles.header__div__text}>
          <Image
            src='/assets/dashboard/Hello.png'
            alt="Picture logo"
            width={150}
            height={20}
            quality={100}
          />
          <p className={styles.header__div__p}>
            Whether you are a student trying to 
            find your ideal private language<br/> 
            teachers/tutors
          </p>
          <p className={styles.header__div__pp}>
            Whether you are a student trying<br/> to 
            find your ideal private language<br/> 
            teachers/tutors
          </p>
        </div>
      </div>
      <div className={styles.header__div__last}>
        <Image
          src='/assets/dashboard/imagedash.png'
          alt="Dashboard Image"
          width={300}
          height={150}
          quality={100}
        />
      </div>
    </header>
  )
}