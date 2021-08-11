
import { UserModel } from '../models/users';
import User from '../models/users/IUser';
class UserRepository {
  async saveUsers({ body }): Promise<User> {
    return UserModel.create(body);
  }
  
  
}
export const userRepository = new UserRepository();
