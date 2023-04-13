import React from 'react'
import techno from '../Image/list.png'
import styles from './TechnoLink.module.css'
const DockerLink = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgDiv}>
        <a href='' target='_blank' rel='noopener noreferrer'>
          <img src={techno} className={`${styles.technoImg}`} />
        </a>
      </div>
      <div className={styles.imgDiv}>
        <a href='' target='_blank' rel='noopener noreferrer'>
          <img src={techno} className={`${styles.technoImg}`} />
        </a>
      </div>
      <div className={styles.imgDiv}>
        <a href='' target='_blank' rel='noopener noreferrer'>
          <img src={techno} className={`${styles.technoImg}`} />
        </a>
      </div>
    </div>
  )
}

export default DockerLink
