const express = require('express')
const { InfoController } = require('../../constroller')
const airplaneRoutes = require('./airplane-routes')
const  cityRouters  = require('./city-routes')
const airportRouters = require('./airport-routes')

const router = express.Router();

router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRouters)
router.use('/airports', airportRouters)

router.get('/info', InfoController.info )
    

module.exports = router