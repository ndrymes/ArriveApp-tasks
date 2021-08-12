import { usersServices } from '../services/users';
import { responseHelper } from '../helpers';
import { Request, Response } from 'express';

/**
     * @description create users 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */
class UsersServices {
  async createUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.createUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }

  /**
     * @description update users 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */

  async updateUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.updateUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }

  /**
     * @description updates hobbies
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */

  async updateHobbies(req: Request, res: Response) {
    try {
      const users = await usersServices.updateHobbies(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }

  /**
     * @description fetch users 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */
  async fetchUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.fetchUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }

   /**
     * @description delete users 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */
  
  async deleteUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.deleteUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }
}
export const usersController = new UsersServices();
