const express = require('express')

const { FlightController } = require('../../constroller')
const { FlightMiddleware } = require('../../middleware')

const router = express.Router()

// /api/v1/city  POSR

router.post('/', 
                FlightMiddleware.validateCreateRequest,
                FlightController.createFlight)    

router.get('/', 
         FlightController.getAllFlights)                
module.exports = router;