import { Schema, model } from 'mongoose';
import Hobbies from './Ihobbies';
import constants from '../../constants';

const { PASSIONLEVELVALUE } = constants;
const hobbiesSchema = new Schema<Hobbies>(
  {
    name: { type: String, required: true },
    passionLevel: {
      type: String,
      enum: PASSIONLEVELVALUE,
    },
    year: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
export const hobbiesModel = model<Hobbies>('Hobbies', hobbiesSchema);