import { hobbiesValidator } from './hobbies-validator';
import { HobbiesRepository } from '../../repositories';
const hobbiesRepository = new HobbiesRepository();
const PASSIONLEVEL = 'passionLevel';
//const responseHelper = require("../../helpers/http-response");

class HobbiesServices {
  async createHobbies(requestContext) {

    try {
      const data = await hobbiesValidator.createHobbies(requestContext.body);
      data.passionLevel = data.passionLevel.toUpperCase();
      return hobbiesRepository.saveHobbies({ body: data });
    } catch (e) {      
      throw e;
    }
  }
  async updateHobbies(requestContext) {
    try {
      const { hobbiesId } = requestContext.params;
      // passionLevel = passionLevel === null ? null : passionLevel.toUpperCase;
      await hobbiesValidator.validateId({ id: hobbiesId });
      const data = await hobbiesValidator.updateHobbies(requestContext.body);
      if (data.hasOwnProperty(PASSIONLEVEL)) {
        data.passionLevel = data.passionLevel.toUpperCase();
      }

      return hobbiesRepository.updateHobbies({ hobbiesId, body: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }

  async fetchHobbies(requestContext) {
    try {
      const { hobbiesId } = requestContext.params;
      const data = await hobbiesValidator.validateId({ id: hobbiesId });
      return hobbiesRepository.fetchHobbies({ hobbiesId: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }

  async deleteHobbies(requestContext) {
    try {
      const { hobbiesId } = requestContext.params;
      const data = await hobbiesValidator.validateId({ id: hobbiesId });
      return hobbiesRepository.deleteHobbies({ hobbiesId: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }
}

export const hobbiesServices = new HobbiesServices();
