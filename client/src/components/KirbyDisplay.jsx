import React, { useEffect, useState } from "react"
import "./KirbyDisplay.scss"

function KirbyDisplay() {
  const [dailyKirby, setDailyKirby] = useState({
    ability: "loading",
    img: "url loading",
  })

  useEffect(() => {
    const getKirby = async () => {
      try {
        const data = await fetch("http://localhost:3000")
        const json = await data.json()
        setDailyKirby(json)
      } catch (error) {
        console.error(error)
      }
    }

    getKirby()
  }, [])

  return (
    <div className='kirbyDisplay'>
      <h3>today's kirby is</h3>
      <div className='img'>
        <img src={dailyKirby.img} />
      </div>
      <div className='ability'>
        <p>{dailyKirby.ability} kirby</p>
      </div>
    </div>
  )
}

export default KirbyDisplay
