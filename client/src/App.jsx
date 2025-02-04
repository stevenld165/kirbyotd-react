import { useState } from "react"
import "./App.scss"
import Header from "./components/Header"
import KirbyDisplay from "./components/KirbyDisplay"
import NextCountdown from "./components/NextCountdown"


function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <KirbyDisplay />
      </div>
      <div className="next-countdown">
          <NextCountdown />
      </div>
      
    </>
  )
}

export default App
