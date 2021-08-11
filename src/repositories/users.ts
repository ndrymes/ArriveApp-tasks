
import { UserModel } from '../models/users';
import User from '../models/users/IUser';
class UserRepository {
  async saveUsers({ body }): Promise<User> {
    return UserModel.create(body);
  }
  
  async updateUser({ userId, body }): Promise<User> {
    return UserModel.findOneAndUpdate(
      { _id: userId },
      { ...body },
      { new: true }
    );
  }

  async updateHobbies({ userId, body }): Promise<User> {

    return UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { hobbies: { $each: body.hobbies } } },
      { new: true }
    );
  }
  async fetchUser({ userId }) : Promise<User> {
    return UserModel.findOne({ _id: userId }).populate('hobbies');
  }
  async deleteUser({ userId }) : Promise<User> {
    return UserModel.findOneAndDelete({ _id: userId });
  }
}
export const userRepository = new UserRepository();
