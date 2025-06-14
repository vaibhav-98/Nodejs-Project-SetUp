const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { error } = require("winston");


/**
 * POST : /airport
 * req.body {name: 'IGI', cityId: 5, code 'DEL}
 */

async function createAirport(req, res) {
   //console.log(req.body);
   
  try {
    const airport = await AirportService.createAirport({
         name: req.body.name,
         code: req.body.code,
         address: req.body.address,
         cityId: req.body.cityId
    });
    SuccessResponse.data =  airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * get : /airport
 *
 */
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * get : /airport/:id
 *
 */
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airport/:id
 */

async function destroyAirport(req, res) {
  try {
    const respone = await AirportService.destroyAirport(req.params.id);

    SuccessResponse.data = respone;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * UPDATE: /airplanes/:id
 */

async function updateAirport(req,res) {
    try {    
      //console.log(">>>", req.params.id, req.body.modelNumber, req.body.capacity);
        const updatedAirport = await AirportService.updateAirport(req.params.id,{ 
             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity
    });
        
        SuccessResponse.data = updatedAirport
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
          ErrorResponse.error = error;
          return res.status(500).json("abc");
    }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport
};
