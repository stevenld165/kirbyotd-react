const express = require("express")
const db = require("./db")
const app = express()
const cors = require("cors")
const corsOptions = {
  origin: ["http://localhost:5173"],
}

app.use(cors())

app.get("/", async (req, res) => {
  // Generates a new kirby based on what is remaining. If none is remaining, it wipes the daily_records table and runs again.
  // Runs res.json with the ability,img object of the newly generated kirby.
  const generateNewKirby = async () => {
    // Returns every copy_id that does not have a matching daily_record item
    const remainingAbilities = await db.manyOrNone(
      `SELECT c.copy_id as copyID 
            FROM copy_abilities AS c
            LEFT OUTER JOIN daily_records as d ON c.copy_id = d.copy_id
            WHERE d.copy_id IS NULL;`
    )
    if (remainingAbilities.length > 0) {
      console.log(remainingAbilities)

      // Choose a random copy_id from the remaining left
      const randomCopy =
        remainingAbilities[
          Math.floor(Math.random() * remainingAbilities.length)
        ]
      const randomCopyID = randomCopy.copyid
      console.log(randomCopyID)

      // Insert a new record into daily_records with that copy_id
      await db.none(
        "INSERT INTO daily_records(copy_id) VALUES($1)",
        randomCopyID
      )

      // Retrieve the information for the new kirby and return the json
      const newDailyAbility = await db.one(
        `SELECT ability, img FROM copy_abilities WHERE copy_id = $1`,
        randomCopyID
      )
      
      res.json(newDailyAbility)

      console.log(`Generated new daily kirby: ${newDailyAbility.ability}`)
    } else {
      db.none("DELETE FROM daily_records").then(generateNewKirby())
    }
  }
  try {
    // Get the ability and image of the daily_record with today's date
    const dailyAbility = await db.oneOrNone(
      `SELECT ability,img 
            FROM daily_records AS d 
            INNER JOIN copy_abilities AS c ON c.copy_id = d.copy_id 
            WHERE record_date = CURRENT_DATE`
    )
    if (dailyAbility) {
      // Simply return the information if it exists (today's kirby has been generated already)
      res.json(dailyAbility)
      console.log(`Retrieved the daily kirby: ${dailyAbility.ability}`)
    } else {
      generateNewKirby()
    }
  } catch (e) {
    console.error(e)
  }
})

app.get("/pastrecords", async (req,res) => {
  try {
    // Retrieves the last 5 (or less) kirby copy abilities generated that is not today's
    const pastRecords = await db.manyOrNone(`
      SELECT record_id, ability, img, record_date FROM daily_records as d
      INNER JOIN copy_abilities as c ON c.copy_id = d.copy_id
      WHERE record_date != CURRENT_DATE
      ORDER BY record_date DESC;
    `)
    console.log(`Retrieved past records: ${pastRecords.map((record) => (record.ability))}`)
    res.json(pastRecords)

  } catch (error) {
    console.error(error)
  }
  
})

app.get("/abilitiesleft", async (req,res) => {
  try {
    const abilitiesLeft = await db.one(`
      SELECT count(ability) as count
            FROM copy_abilities AS c
            LEFT OUTER JOIN daily_records as d ON c.copy_id = d.copy_id
            WHERE d.copy_id IS NULL;
    `)
    console.log(`Retrieved count of abilities left: ${abilitiesLeft.count}`)
    res.send(abilitiesLeft.count)
    
  } catch (error) {
    console.error(error)
  }
})

app.listen(3000)
