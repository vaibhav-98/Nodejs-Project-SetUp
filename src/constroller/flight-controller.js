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

module.exports = {
  createFlight,
  getAllFlights
};
