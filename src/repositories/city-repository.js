const CrudRepository  = require('./crud-repositories')
const { City } = require('../models/')

class CityRepository extends CrudRepository {
    constructor() {
        super(City)
    }
}


module.exports = CityRepository;