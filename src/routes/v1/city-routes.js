const express = require('express')

const { CityController } = require('../../constroller')
const { CityMiddlewares } = require('../../middleware')

const router = express.Router()

// /api/v1/city  POSR

router.post('/', 
       CityMiddlewares.validateCreateRequest,
       CityController.createCity)

// /api/v1/city  POST 
router.patch('/:id',
               CityController.updateCity)
module.exports = router;