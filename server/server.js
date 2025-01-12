const express = require('express')
const db = require('./db')
const app = express()


app.get('/', async (req, res) => {
    try {
        // Get the ability and image of the daily_record with today's date
        const dailyAbility = await db.oneOrNone(
            `SELECT ability,img 
            FROM daily_records AS d 
            INNER JOIN copy_abilities AS c ON c.copy_id = d.copy_id 
            WHERE record_date = '2025-01-12'`
        )
        if (dailyAbility) {
            // Simply return the information if it exists (today's kirby has been generated already)
            res.json(dailyAbility)
        } else {
            console.log('no daily kirby')
            res.send('no daily ability')
        }
    } catch (e) {
        console.error(e)
    }
})


app.listen(3000)

