import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  appPassword: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  appPassword: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const UserForEmailSender = model<IUser>('UserForEmailSender', userSchema);

export default UserForEmailSender;
