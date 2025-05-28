const CrudRepository  = require('./crud-repositories')
const { Flight } = require('../models');
const { where } = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getAllFlights(filter) {
        const response = await Flight.findAll({
            where:filter
        })
        return response
    }
}


module.exports = FlightRepository;