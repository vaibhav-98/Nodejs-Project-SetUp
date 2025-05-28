
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { compareTime }  = require('../utils/helpers/datetime-helper')

const flightRepository = new FlightRepository();



async function createFlight(data) {
 
  
  try {
    //Check if departure time is after arrival time — which is invalid
    if (compareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError(
        "Departure time cannot be after arrival time",
        StatusCodes.BAD_REQUEST
      );
    }
    const flight = await flightRepository.create(data);
    
    return flight;

  } catch (error) {
     //console.error("Sequelize error:", error);  // Add this line
     if (error instanceof AppError) {
    // Don't overwrite it — just rethrow
    throw error;
  }
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}



async function getAllFlights(query) {
    let customFilter = {}
   
    
    if(query.trips) {
        [departureAirportId,arrivalAirportId] = query.trips.split("-")
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
 
    try {
         const flights = await flightRepository.getAllFlights(customFilter);
         
         return flights;
    } catch (error) {
        throw new AppError('Connot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
  createFlight,
  getAllFlights
};
