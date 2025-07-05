const { StatusCodes } = require("http-status-codes");

const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { error } = require("winston");


/**
 * POST : /flight
 * req.body 
 */

async function createFlight(req, res) {
   //console.log(req.body);
   
  try {
    const flight = await FlightService.createFlight({
         flightNumber: req.body.flightNumber,
         airplaneId: req.body.airplaneId,
         departureAirportId: req.body.departureAirportId,
         arrivalAirportId: req.body.arrivalAirportId,
         arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price:req.body.price,
        bordingGate: req.body.bordingGate,
        totalSeats: req.body.totalSeats,
    });
    
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}


async function getAllFlights(req,res) {
   
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
         ErrorResponse.error = error;
         return res.status(error.statusCode).json(ErrorResponse);
    }
}




/**
 * get : /flight/:id
 *
 */
async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}




async function updateSeats(req, res) {
    try {
       console.log("Seats:", req.body.seats, "Dec flag:", req.body.dec);
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats, 
             dec: req.body.dec ?? true   // Fix added here
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats
};
