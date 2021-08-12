import { usersValidator } from './users-validator';
import { userRepository } from '../../repositories/users';
const HOBBIES = 'hobbies';
//const responseHelper = require("../../helpers/http-response");


/**
     * @description create hobbies 
     * @param {Object} requestContex - Http Request object
     */
class UsersServices {
  async createUsers(requestContext) {
    try {
      //validates request body
      const data = await usersValidator.createUsers(requestContext.body);
      return userRepository.saveUsers({ body: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }
  async updateUsers(requestContext) {
    try {
      const { userId } = requestContext.params;

      //validate Id
      await usersValidator.validateId({ id: userId });
      const data = await usersValidator.updateUsers(requestContext.body);
      return userRepository.updateUser({ userId, body: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }
  async updateHobbies(requestContext) {
    try {
      const { userId } = requestContext.params;

       //validate Id
      await usersValidator.validateId({ id: userId });
      const data = await usersValidator.updateHobbies(requestContext.body);
      if (data.hasOwnProperty(HOBBIES)) {
        for (let hobby of data.hobbies) {
          await usersValidator.validateId({ id: hobby });
        }
      }
      return userRepository.updateHobbies({ userId, body: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }

  async fetchUsers(requestContext) {
    try {
      const { userId } = requestContext.params;
       //validate Id
      const data = await usersValidator.validateId({ id: userId });
      return userRepository.fetchUser({ userId: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }

  async deleteUsers(requestContext) {
    try {
      const { userId } = requestContext.params;
       //validate Id
      const data = await usersValidator.validateId({ id: userId });
      return userRepository.deleteUser({ userId: data });
    } catch (e) {
      // We attach the code validation error caused by bad request
      // e.code = responseHelper.responseCodes.badRequest;
      throw e;
    }
  }
}

export const usersServices = new UsersServices();
