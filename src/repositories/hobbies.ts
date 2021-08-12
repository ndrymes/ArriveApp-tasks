import Hobbies from '../models/hobbies/Ihobbies';
import { hobbiesModel } from '../models/hobbies/index';
export class HobbiesRepository {
   //save hobbies in database
  async saveHobbies({ body }): Promise<Hobbies> {
    return await hobbiesModel.create(body);
  }
  //update hobbies in database
  async updateHobbies({ hobbiesId, body }): Promise<Hobbies> {
    return hobbiesModel.findOneAndUpdate(
      { _id: hobbiesId },
      { ...body },
      { new: true }
    );
  }
  //fetch hobbies from database
  async fetchHobbies({ hobbiesId }): Promise<Hobbies> {
    return hobbiesModel.findOne({ _id: hobbiesId });
  }
  //delete hobbies from database
  async deleteHobbies({ hobbiesId }): Promise<Hobbies> {
    return hobbiesModel.findOneAndDelete({ _id: hobbiesId });
  }
}
export const hobbiesRepository = new HobbiesRepository();
