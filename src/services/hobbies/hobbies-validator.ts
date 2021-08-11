import {Joi} from 'joi';
import { Types } from 'mongoose';
const { ObjectId } = Types;
import constants from '../../constants';
import Hobbies from '../../models/hobbies/Ihobbies';
const { PASSIONLEVELKEYS } = constants;

class HobbiesValidator {
  private constants;
  private Joi;
  constructor() {
    this.constants = constants;
    this.Joi = Joi;
  }
  createHobbies(data:Hobbies) {

    //const { Joi } = this;
    const schema = {
      year: Joi.date().iso().required(),
      name: Joi.string().required(),
      passionLevel: Joi.string()
        .valid(...this.constants.PASSIONLEVELKEYS)
        .required(),
    };
    return Joi.object(schema).validateAsync(data);
  }
  updateHobbies(data:Hobbies) {
    try {
      if (Object.keys(data).length === 0) {
        throw new Error('At least one field must be supplied for update');
      }
      const { Joi } = this;
      const schema = {
        year: Joi.string(),
        name: Joi.string(),
        passionLevel: Joi.string().valid(...this.constants.PASSIONLEVELKEYS),
      };
      return Joi.object(schema).validateAsync(data);
    } catch (error) {
      throw error;
    }
  }
  validateId({ id }:{id:string}) {
    try {
      if (ObjectId.isValid(id)) {
        return id;
      } else {
        throw new Error('invalid Id');
      }
    } catch (error) {
      throw error;
    }
  }
}
export const hobbiesValidator = new HobbiesValidator();
