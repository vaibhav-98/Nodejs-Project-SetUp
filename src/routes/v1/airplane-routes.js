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

//  /api/v1/airplane/:id DELETE
router.delete('/:id',  
        AirplaneController.destroyAirplane)

// /api/v1/airplane/:id PATCH
router.patch('/:id',AirplaneController.updateAirplane)        
module.exports = router