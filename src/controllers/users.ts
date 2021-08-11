import { usersServices } from '../services/users';
import { responseHelper } from '../helpers';
import { Request, Response } from 'express';
class UsersServices {
  async createUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.createUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }
  async updateUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.updateUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }
  async updateHobbies(req: Request, res: Response) {
    try {
      const users = await usersServices.updateHobbies(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }

  async fetchUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.fetchUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }
  async deleteUsers(req: Request, res: Response) {
    try {
      const users = await usersServices.deleteUsers(req);
      return responseHelper.successResponse(res, { users });
    } catch (error) {
      return responseHelper.errorResponse(res, error, { users: [] });
    }
  }
}
export const usersController = new UsersServices();
