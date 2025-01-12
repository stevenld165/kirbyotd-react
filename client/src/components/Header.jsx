import React from "react"
import "./Header.scss"

function Header() {
  return (
    <div className='header'>
      <h1>kirby of the day!!</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default Header
