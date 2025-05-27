const express = require('express')

const { FlightController } = require('../../constroller')
//const { CityMiddlewares } = require('../../middleware')

const router = express.Router()

// /api/v1/city  POSR

//router.post('/', FlightController.)

// /api/v1/city  PATCH 
router.patch('/:id',
               CityController.updateCity)

// /api/v1/city   DELETE
router.delete('/:id', CityController.deleteCity)            
module.exports = router;