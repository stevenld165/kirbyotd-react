import React, { useEffect, useState, Component, useRef } from "react"
import "./KirbyDisplay.scss"

import Card from "./Card"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function KirbyDisplay() {
  const [dailyKirby, setDailyKirby] = useState({
    ability: "loading",
    img: "url loading",
  })

  const [previousKirbys, setPreviousKirbys] = useState([])

  const [sliderIndex, setSliderIndex] = useState(0)
  let sliderRef = useRef(null)
  const carouselSettings = {
    speed: 500,
    rtl: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    className: "kirby-slider",
    beforeChange: (current, next) => setSliderIndex(next),
  }

  useEffect(() => {
    const getKirby = async () => {
      try {
        // Get today's kirby
        const kirbyData = await fetch(import.meta.env.VITE_API_URL)
        const kirbyJson = await kirbyData.json()
        setDailyKirby(kirbyJson)

        // Get the previous kirbys
        const oldKirbys = await fetch(
          import.meta.env.VITE_API_URL + "/pastrecords"
        )
        const oldKirbysJson = await oldKirbys.json()

        const fixedOldKirbys = oldKirbysJson.map((record) => {
          const date = new Date(record.record_date)
          //console.log(date.getUTCDate())
          return {
            ...record,
            record_date: date.toUTCString().toLowerCase().substring(4, 16),
          }
        })

        setPreviousKirbys(fixedOldKirbys)
      } catch (error) {
        console.error(error)
      }
    }

    getKirby()
  }, [])

  const previousKirbyCards = previousKirbys.map((record) => (
    <Card
      date={record.record_date}
      ability={record.ability}
      img={record.img}
      key={record.record_id}
    />
  ))

  return (
    <div className='kirby-display-container'>
      <p>view past kirbys ➡️</p>
      <Slider
        ref={(slider) => {
          sliderRef = slider
        }}
        {...carouselSettings}
      >
        <Card date='today' ability={dailyKirby.ability} img={dailyKirby.img} />
        {previousKirbyCards}
      </Slider>
      <p className='slide-index'>
        {sliderIndex + 1}/{previousKirbys.length + 1}
      </p>
      {sliderIndex != 0 && (
        <button
          onClick={(e) => sliderRef.slickGoTo(0)}
          className='return-button'
        >
          today
        </button>
      )}
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
