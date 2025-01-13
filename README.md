# KirbyOTD React & API

This React webapp and API generates a new Kirby copy ability each day. It will only repeat once it goes through all copy abilities.
This project was made to learn both SQL and the process of creating a Backend REST API. It could probably be done a lot easier using a client-side, serverless localstorage solution instead of an entire API and Database, but it is about the journey and not the destination.

## How to run

- In the server folder, create a `password.txt` with a chosen password for your PostgreSQL database
- In the `docker-compose.yml` change the `VITE_API_URL` variable to the public facing hostname of your API (including any ports)
- Use Docker Compose to run the docker-compose.yml
- Afterward, connect to the PostgreSQL server in whatever fashion you desire
  - Use the SQL commands in kirbyotd.txt to recreate the copy_abilities and daily_records tables
- (Alternatively) Connect using pgAdmin and restore using the kirbyotd.backup file
- Woohoo! Enjoy your daily kirbys!

## Tech Stack

- Frontend: React
- Backend: Express.JS & Node.js
- Database: PostgreSQL

## Process:

- [x] Learn the basics of SQL
- [x] Learn the basics of creating a REST API backend using Express.js
- [x] Get data from the Kirby Wiki to use in project
- [x] Create Database schema and set-up PostgreSQL tables
  - [x] Fiddle with Docker to get development and testing to work properly 😔
- [x] Create API
- [x] Create Frontend
- [ ] Find suitable way to either host or deploy project!
