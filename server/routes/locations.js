import express from 'express'
import LocationsController from '../controllers/locations.js'

const router = express.Router()

router.get('/location', LocationsController.getAllLocations)
router.get('/location/:location', LocationsController.getLocation)

export default router