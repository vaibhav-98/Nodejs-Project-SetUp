const { Sequelize } = require('sequelize');

const CrudRepository = require('./crud-repositories');
const { Flight, Airplane, Airport, City } = require('../models');
const db = require('../models');
const { addRowLockOnFlights } = require('./queries');


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail',
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                }
            ]
        });
        return response;
    }

async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(addRowLockOnFlights(flightId));
    const flight = await Flight.findByPk(flightId);

    // 🔥 Normalize dec to boolean (even if it's string 'false')
    const decStr = String(dec).toLowerCase().trim();
    const shouldDecrease = decStr === 'true' || decStr === '1';

    console.log("Normalized dec flag:", decStr, "Should decrease:", shouldDecrease);

    if (shouldDecrease) {
        await flight.decrement('totalSeats', { by: seats });
    } else {
        await flight.increment('totalSeats', { by: seats });
    }

    const updatedFlight = await Flight.findByPk(flightId);
    return updatedFlight;
}


}

module.exports = FlightRepository;