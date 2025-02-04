import React, { useEffect, useState, Component } from "react"
import "./KirbyDisplay.scss"

import Card from "./Card"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function KirbyDisplay() {
  const [dailyKirby, setDailyKirby] = useState({
    ability: "loading",
    img: "url loading",
  })

  const [previousKirbys, setPreviousKirbys] = useState([])

  const carouselSettings = {
    speed: 500,
    rtl: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "kirby-slider"
  }

  useEffect(() => {
    const getKirby = async () => {
      try {
        // Get today's kirby
        const data = await fetch(import.meta.env.VITE_API_URL)
        const json = await data.json()
        setDailyKirby(json)

        // Get the previous kirbys
        const oldKirby = await fetch(import.meta.env.VITE_API_URL + "/pastrecords")
        const oldKirbyJson = await oldKirby.json()
        const fixedOldKirbys = oldKirbyJson.map((record) => {
          const date = new Date(record.record_date)
          return ({
            ...record,
            record_date: date.toDateString().toLowerCase().substring(4)
          })
        })

        setPreviousKirbys(fixedOldKirbys)
      } catch (error) {
        console.error(error)
      }
    }

    getKirby()
  }, [])

  const previousKirbyCards = previousKirbys.map((record) => (<Card date={record.record_date} ability={record.ability} img={record.img} key={record.record_id} />))
  
  return (
    <div className="kirby-display-container">
      <p>view past kirbys ➡️</p>
      <Slider {...carouselSettings}>
        <Card date="today" ability={dailyKirby.ability} img={dailyKirby.img} />
        {previousKirbyCards}
      </Slider>
      
    </div>
  )
  /*
    
  */
  /* return (
    <div className='kirbyDisplay'>
      <h3>today's kirby is</h3>
      <div className='img'>
        <img src={dailyKirby.img} />
      </div>
      <div className='ability'>
        <p>{dailyKirby.ability} kirby</p>
      </div>
    </div>
  ) */
}

export default KirbyDisplay
