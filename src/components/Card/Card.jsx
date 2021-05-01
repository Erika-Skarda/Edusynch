import Image from 'next/image'
import { useState, useEffect } from "react";
import  InfiniteScroll  from "react-infinite-scroll-component";

import styles from '../../styles/components/Main.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const starIcon = <FontAwesomeIcon icon={ faStar } />

export default function Card({ items, setItems }) {
  const [hasMore, setHasMore] = useState(true)
  
  const fetchMoreData = () => {
    if (items.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })))
    }, 500);
  };
  
  
  return (
    
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <main className={styles.main}>
        {items.map(function (data, index) {
          const { title, description, star, lessons } = data;
          return (
              <div key={index} className={styles.main__div}>
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
                  {star >= 1 
                    ? <i className={styles.main__div__icon2}>{starIcon}</i> 
                    : <i className={styles.main__div__icon1}>{starIcon}</i>  
                  }
                  {star>= 2 
                    ? <i className={styles.main__div__icon2}>{starIcon}</i> 
                    : <i className={styles.main__div__icon1}>{starIcon}</i>  
                  }
                  {star >= 3 
                    ? <i className={styles.main__div__icon2}>{starIcon}</i> 
                    : <i className={styles.main__div__icon1}>{starIcon}</i>  
                  }
                  {star >= 4
                    ? <i className={styles.main__div__icon2}>{starIcon}</i> 
                    : <i className={styles.main__div__icon1}>{starIcon}</i>  
                  }
                  {star >= 5 
                    ? <i className={styles.main__div__icon2}>{starIcon}</i> 
                    : <i className={styles.main__div__icon1}>{starIcon}</i>  
                  }
                </div>
                <button className={styles.main__div__button}>{lessons} LESSONS  </button>
              </div>
              <p className={styles.main__div__p}>
                {title}: {description}
              </p>
            </div> 
          );
        })}
          </main>
      </InfiniteScroll>
  
   
  )
}

