const { where } = require("sequelize");
const {StatusCodes} = require('http-status-codes')
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if(!response) {
        throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND )
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if(!response) {
        throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND )
    }
    return response;
  }

  async getAll(data) {
    const response = await this.model.findAll(data);
    return response;
  }

  async update(id, data) {
  const [updatedCount] = await this.model.update(data, {
    where: {
      id: id,
    },
  });

  if (updatedCount === 0) {
    throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND);
  }

  // Optionally fetch the updated record and return it
  const updatedRecord = await this.model.findByPk(id);
  return updatedRecord;
}

}
module.exports = CrudRepository;
