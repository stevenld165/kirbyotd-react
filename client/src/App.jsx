import { useState } from "react"
import "./App.scss"
import Header from "./components/Header"
import KirbyDisplay from "./components/KirbyDisplay"
import NextCountdown from "./components/NextCountdown"
import AbilitiesLeftCounter from "./components/AbilitiesLeftCounter"


function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <KirbyDisplay />
        <div className="extras-container">
          <NextCountdown />
          <AbilitiesLeftCounter />
        </div>
      </div>
      <div className="next-countdown">
          
      </div>
      
    </>
  )
}

export default App
