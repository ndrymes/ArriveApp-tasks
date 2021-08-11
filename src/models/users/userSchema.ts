import { Schema, model } from 'mongoose';
import User from './IUser';

const { ObjectId } = Schema.Types;
const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    hobbies: [
      {
        type: ObjectId,
        ref: 'Hobbies',
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const UserModel = model<User>('User', userSchema);
