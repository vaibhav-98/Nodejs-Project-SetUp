const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { CityRepository } = require("../repositories");

/**
 * POST : /cities
 * req-body {name: "Lucknow"}
 */

async function createCity(req,res) {
    try {
        const city = await CityService.createCity({
            name:req.body.name
        })
        SuccessResponse.data = city
        return res 
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res 
                  .status(error.statusCode)
                  .json(ErrorResponse)
    }
}


/**
 * PATCH : /cities
 * 
 */
async function updateCity(req,res) {   
     try {
         const city = await CityService.updateCity(req.params.id, {
            name: req.body.name
         })
         SuccessResponse.data = city
           return res
                    .status(StatusCodes.OK)
                    .json(SuccessResponse)
     } catch (error) {
            ErrorResponse.error = error;
        return res 
                  .status(error.statusCode)
                  .json(ErrorResponse)
     }
}

/**
 * DELETE : /cities
 * 
 */
async function deleteCity(req,res) {
    try {
        const respone = await CityService.destroyCity(req.params.id)
        SuccessResponse.data = respone
            return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}



module.exports = {
   createCity,
   updateCity,
   deleteCity
}