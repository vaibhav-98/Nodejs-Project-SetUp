const { StatusCodes } = require('http-status-codes') 

const { ErrorResponse} = require('../utils/common')
const AppError = require('../utils/errors/app-error')

function validateCreateRequest(req,res,next) {
     //console.log(req.body.cityId);
    if(!req.body.name ) {
          ErrorResponse.message = "Something went wrong while create airport",
          ErrorResponse.error = new AppError (['Name not found in the oncoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.code ) {
          ErrorResponse.message = "Something went wrong while create airport",
          ErrorResponse.error = new AppError (['Airport code not found in the oncoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    };
    if(!req.body.cityId ) {
        console.log(req.body.cityId);
        
          ErrorResponse.message = "Something went wrong while create airport",
          ErrorResponse.error = new AppError (['City Id not found in the incoming request'],StatusCodes.BAD_REQUEST)
         return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}


module.exports ={ 
    validateCreateRequest
};
