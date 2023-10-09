import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventsData from '../data/events.js'

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS data;

    CREATE TABLE IF NOT EXISTS data (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedEventsTable = async () => {
  await createEventsTable()

  eventsData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO data (title, location, image, time, date) VALUES ($1, $2, $3, $4, $5)'
    }

    const values = [
        event.title,
        event.location,
        event.image,
        event.time,
        event.date
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.title} added successfully`)
    })
  })
}

seedEventsTable()