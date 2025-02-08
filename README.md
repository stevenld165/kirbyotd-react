# 📆🪄 KirbyOTD - [https://kirbyotd.netlify.app](https://kirbyotd.netlify.app)
<img src="https://github.com/user-attachments/assets/0e536a74-a366-4184-9293-2f09e14cab4c" width="256px" alt="kirbyotd-icon" />

> Every single day, a new Kirby copy ability!

An Express.js API and accompaning React frontend to generate a new Kirby copy ability every day\*. It stores each day's generated Kirby in a PostgreSQL server to prevent repeats until all copy abilities have been exhausted.

\*New Kirbys only generate if it is requested at least once per day. This is intentional, as if nobody wants a new kirby that day, it won't be made.
## How to run

- In the server folder, create a `password.txt` with a chosen password for your PostgreSQL database
- In the `docker-compose.yml` change the `VITE_API_URL` variable to the public facing hostname of your API (including any ports)
- Use Docker Compose to run the docker-compose.yml
- Afterward, connect to the PostgreSQL server in whatever fashion you desire
  - Use the SQL commands in kirbyotd.txt to recreate the copy_abilities and daily_records tables
- (Alternatively) Connect using pgAdmin and restore using the kirbyotd.backup file
- Edit the Caddyfile to correspond with your situation
- Woohoo! Enjoy your daily kirbys!

## Tech Stack

- Frontend: React
- Backend: Express.JS & Node.js
- Database: PostgreSQL
- Deploying: Docker

## Why

This project was made to learn both SQL and the process of creating a Backend REST API. It could probably be done a lot easier using a client-side, serverless localstorage solution instead of an entire API and Database, but it is about the journey and not the destination. This all started in Calculus class where I would draw Kirbys when my attention started to wane. Then, I created a python script to do the very thing this project does: generate a new kirby every day without repeating. This way, each day I could draw a different Kirby. After this, I found that this project is a good, simple idea to learn a variety of tools and ideas. This newest iteration provides a nice looking user-interface and accesses a database!

## MVP Process:

- [x] Learn the basics of SQL
- [x] Learn the basics of creating a REST API backend using Express.js
- [x] Get data from the Kirby Wiki to use in project
- [x] Create Database schema and set-up PostgreSQL tables
  - [x] Fiddle with Docker to get development and testing to work properly 😔
- [x] Create API
- [x] Create Frontend
- [x] Find suitable way to either host or deploy project!

## Future Plans:

### Backend:
- [x] Update API to provide ability to access previous days' Kirbys
- [x] Update API to provide a count of the number of Kirbys left before reseting
- [ ] Create some kind of indicator for if the server is running (the api is currently running on my little Raspberry Pi.. possible plans to move backend to another service)

### Frontend:
- [x] Incorporate new API changes to provide more functionality!
- [x] Add some sort of timer until a new Kirby is generated, perhaps with an auto refresh
- [ ] Add some kind of fun animation to the currently static webpage

---

*Icon created by me*
