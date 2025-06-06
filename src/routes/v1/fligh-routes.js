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
         
 // /api/flights/:id    GET       
router.get('/:id', 
         FlightController.getFlight)           

// /api/flights/seats  PATCH 

router.patch('/:id/seats',
          FlightMiddleware.validateUpdateSeatsRequest,
          FlightController.updateSeats)
module.exports = router;