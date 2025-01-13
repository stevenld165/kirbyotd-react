import React from "react"
import "./Header.scss"

import logo from "../images/kirbyotd-icon.png"

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-title'>
          <h1>kirby of the day!!</h1>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <img src={logo} alt='logo' />
      </div>
    </>
  )
}

export default Header
