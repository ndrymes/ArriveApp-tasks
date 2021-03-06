import { hobbiesServices } from '../services/hobbies';
import { responseHelper } from '../helpers';
import { Request, Response } from 'express';

  /**
     * @description create hobbies 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */
class HobbiesController {

  async createHobbies(req: Request, res: Response) {
    try {
      const hobbies = await hobbiesServices.createHobbies(req);
      return responseHelper.successResponse(res, { hobbies });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { hobbies: [] });
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
      //update hobbies
      const hobbies = await hobbiesServices.updateHobbies(req);
      return responseHelper.successResponse(res, { hobbies });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { hobbies: [] });
    }
  }

  /**
     * @description get hobbies 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */

  async fetchHobbies(req: Request, res: Response) {
    try {
      //gets hobbies
      const hobbies = await hobbiesServices.fetchHobbies(req);
      return responseHelper.successResponse(res, { hobbies });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { hobbies: [] });
    }
  }

  /**
     * @description delete hobbies 
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns object of the required response
     */

  async deleteHobbies(req: Request, res: Response) {
    try {
      //deletes hobbies
      const hobbies = await hobbiesServices.deleteHobbies(req);
      return responseHelper.successResponse(res, { hobbies });
    } catch (error) {
      // We attach the code validation error caused by bad request
      error.code = responseHelper.responseCodes.badRequest;
      return responseHelper.errorResponse(res, error, { hobbies: [] });
    }
  }
}
export const hobbiesController = new HobbiesController();
