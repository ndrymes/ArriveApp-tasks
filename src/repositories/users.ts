
import { UserModel } from '../models/users';
import User from '../models/users/IUser';
class UserRepository {
  //save users in database
  async saveUsers({ body }): Promise<User> {
    return UserModel.create(body);
  }
  //uodate users in database
  async updateUser({ userId, body }): Promise<User> {
    return UserModel.findOneAndUpdate(
      { _id: userId },
      { ...body },
      { new: true }
    );
  }
//save hobbies on user profile database
  async updateHobbies({ userId, body }): Promise<User> {

    return UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { hobbies: { $each: body.hobbies } } },
      { new: true }
    );
  }
  //fetch  users from database
  async fetchUser({ userId }) : Promise<User> {
    return UserModel.findOne({ _id: userId }).populate('hobbies');
  }
  //delete  users from database
  async deleteUser({ userId }) : Promise<User> {
    return UserModel.findOneAndDelete({ _id: userId });
  }
}
export const userRepository = new UserRepository();
