require("dotenv").config()

console.log(process.env.DB_HOSTNAME)

let dbPassword = ""
const fs = require("node:fs")

try {
  dbPassword = fs.readFileSync(process.env.DB_PASSWORD_FILE, "utf8")
  console.log(dbPassword)
} catch (error) {
  console.log(error)
}

const cn = {
  host: process.env.DB_HOSTNAME,
  port: "5432",
  database: "kirbyotd",
  user: "postgres",
  password: dbPassword,
  max: 30,
}
const pgp = require("pg-promise")()
const db = pgp(cn)

module.exports = db
