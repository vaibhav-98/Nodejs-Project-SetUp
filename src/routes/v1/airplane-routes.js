const express = require('express')

const { AirplaneController } = require('../../constroller')
const { AirplaneMiddlewares } = require('../../middleware')

const router = express.Router()

//  /api/v1/airplane POST
router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,  
        AirplaneController.createAirplane)

module.exports = router