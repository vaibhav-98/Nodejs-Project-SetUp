const express = require('express')

const { AirplaneController } = require('../../constroller')
const { AirplaneMiddlewares } = require('../../middleware')

const router = express.Router()

//  /api/v1/airplane POST
router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,  
        AirplaneController.createAirplane)

 //  /api/v1/airplane GET
router.get('/',  
        AirplaneController.getAirplanes)

 //  /api/v1/airplane/:id GET
router.get('/:id',  
        AirplaneController.getAirplane)
module.exports = router