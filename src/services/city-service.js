const { where } = require("sequelize");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const cityRepository= new CityRepository();


async function createCity(data) {
     try {
         const city = await cityRepository.create(data);
         return city
     } catch (error) {
        console.log(">>", error);
        
         if (error.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError") {
           let explanation = [];
            error.errors.forEach((err) => {
            explanation.push( err.message);
      });
      // console.log(explanation);
       throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    };
    throw new AppError(
      "Cannot create a new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
 }
}


async function updateCity (id, data) {
  console.log(id,data);
  
  try {
     const  updatedCity = await cityRepository.update(id,data)
      return updatedCity
  } catch (error) {
      if(error.statusCode == StatusCodes.NOT_FOUND) {
       throw new AppError("The City you requested to update is not present", error.statusCode );
      }
      throw new AppError('connot fetch data of provide id ', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}


async function destroyCity(id) {
     try {
       const respnse = await cityRepository.destroy(id);
       return respnse
     } catch (error) {
         if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The City you requested to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch  data of all the City ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
     }
}


module.exports = {
    createCity,
    updateCity,
   destroyCity
}