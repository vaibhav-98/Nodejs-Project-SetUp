const { StatusCodes } = require('http-status-codes') 

const { ErrorResponse} = require('../utils/common')
const AppError = require('../utils/errors/app-error')

function validateCreateRequest(req,res,next) {
     //console.log(req.body.cityId);
    if(!req.body.flightNumber ) {
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['flightNumber not found in the oncoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.airplaneId ) {
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['airplaneId not found in the oncoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.arrivalTime ) {
        console.log(req.body.cityId);
        
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['arrivalTimenot found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.departureTime) {
        console.log(req.body.cityId);
        
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['departureTimenot found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.price) {
        console.log(req.body.cityId);
        
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['price not found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.totalSeats ) {
        console.log(req.body.cityId);
        
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['totalSeats not found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    
    next();
}


function validateUpdateSeatsRequest(req,res,next) {
    if(!req.body.seats ) {
       // console.log(req.body.Seats);
        
          ErrorResponse.message = "Something went wrong while create flight",
          ErrorResponse.error = new AppError (['Seats not found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    
    next();
}

module.exports ={ 
    validateCreateRequest,
    validateUpdateSeatsRequest
};


