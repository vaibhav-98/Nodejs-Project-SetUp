const express = require('express')

const { CityController } = require('../../constroller')
const { CityMiddlewares } = require('../../middleware')

const router = express.Router()

// /api/v1/city  POSR

router.post('/', 
       CityMiddlewares.validateCreateRequest,
       CityController.createCity)


module.exports = router;