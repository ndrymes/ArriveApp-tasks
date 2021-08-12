import Joi from 'joi';
import { Types } from 'mongoose';
const { ObjectId } = Types;

class UsersValidator {
  private Joi;
  constructor() {
    this.Joi = Joi;
  }
  createUsers(data) {

    const { Joi } = this;
    const schema = {
      name: Joi.string().required(),
    };
    return Joi.object(schema).validateAsync(data);
  }
  updateUsers(data) {
    try {
      if (Object.keys(data).length === 0) {
        throw new Error('At least one field must be supplied for update');
      }
      const { Joi } = this;
      const schema = {
        name: Joi.string(),
      };
      return Joi.object(schema).validateAsync(data);
    } catch (error) {
      throw error;
    }
  }

  updateHobbies(data) {
    try {
      if (Object.keys(data).length === 0) {
        throw new Error('At least one field must be supplied for update');
      }
      const { Joi } = this;
      const schema = {
        hobbies: Joi.array(),
      };
      return Joi.object(schema).validateAsync(data);
    } catch (error) {
      throw error;
    }
  }
  validateId({ id }) {
    try {
      if (ObjectId.isValid(id)) {
        return id;
      } else {
        throw new Error('Id must have a valid mongo Id');
      }
    } catch (error) {
      throw error;
    }
  }
}
export const usersValidator = new UsersValidator();
