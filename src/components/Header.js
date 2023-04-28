import React from 'react'
import style from './Header.module.css'
import logo from '../Image/WLUG_white.png'

const Header = () => {
  return (
    <>
      <div className={style.headerDiv}>
        <img src={logo} alt='WLUG Logo' className={style.wlug} />
      </div>
    </>
  )
}



export default Header
