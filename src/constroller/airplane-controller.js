const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { error } = require("winston");

/**
 * POST : /airplane
 * req.body {modelNumber: 'airbus320', capacity:200}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * get : /airplane
 *
 */
async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * get : /airplane/:id
 *
 */
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airplanes/:id
 */

async function destroyAirplane(req, res) {
  try {
    const airpalne = await AirplaneService.destroyAirplane(req.params.id);

    SuccessResponse.data = airpalne;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * UPDATE: /airplanes/:id
 */

async function updateAirplane(req,res) {
    try {
        
      console.log(">>>", req.params.id, req.body.modelNumber, req.body.capacity);
        
        const updatedAirplane = await AirplaneService.updateAirplane(req.params.id,{ 
             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity
    });
        
        SuccessResponse.data = updatedAirplane
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
          ErrorResponse.error = error;
          return res.status(500).json("abc");
    }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
};
