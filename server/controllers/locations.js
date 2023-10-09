import { pool } from '../config/database.js'

const getAllLocations = async (req, res) => {
  try {
    const results = await pool.query('SELECT distinct(location) FROM data')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getLocation = async (req, res) => {
  try {
    const location = req.params.location
    const selectQuery = `SELECT * FROM data WHERE location = $1`
    const results = await pool.query(selectQuery, [location])

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getAllLocations,
  getLocation
}