import React, { useEffect, useState } from 'react'

function AbilitiesLeftCounter() {
  const [abilitiesLeft, setAbilitiesLeft] = useState(0)  

  useEffect(() => {
    const getAbilitiesLeft = async () => {
        const data = await fetch(import.meta.env.VITE_API_URL + "/abilitiesleft")
        const json = await data.json()
        setAbilitiesLeft(json)
    }
    getAbilitiesLeft()
  }, [])  

  return (
    <div><p>abilities left until reset: <strong>{abilitiesLeft}</strong></p></div>
  )
}

export default AbilitiesLeftCounter