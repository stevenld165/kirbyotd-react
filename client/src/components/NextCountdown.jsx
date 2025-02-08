import React from 'react'
import Countdown from 'react-countdown'

export default function NextCountdown() {
  // create a date for tomorrow, midnight
  const date = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Chicago"}))
  date.setHours(24,0,0,0)

  // define format to display countdown component
  const renderer = ({hours,minutes,seconds, completed}) => {
    if (completed) {
      return (<p>refresh page for new kirby!</p>)
    } else {
    return (
      <p>
        <strong>
          {String(hours).padStart(2,'0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')/*hh:mm:ss*/}
        </strong>
        <br/>
        until next kirby
      </p>
    )
    }
  }

  return (
    <Countdown date={date} renderer={renderer} onComplete={() => {window.location.reload(false)}}/>
  )
}

