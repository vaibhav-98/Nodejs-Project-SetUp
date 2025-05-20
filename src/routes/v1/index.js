const express = require('express')
const { InfoController } = require('../../constroller')

const router = express.Router();

router.get('/info', InfoController.info )
    

module.exports = router