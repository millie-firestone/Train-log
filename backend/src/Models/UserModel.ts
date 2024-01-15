// export interface UserModel {
// 	username: string;
// 	email: string;
// 	password: string;
// }

import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

interface User extends Document {
	username: string;
	password: string;
	comparePassword(candidatePassword: string): Promise<boolean>;
};

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
});

userSchema.pre<User>('save', async function (next) {
	// Hash the password before saving it to the database
 if (this.isModified('password')) {
	 this.password = await bcrypt.hash(this.password, 10);
 }
 next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
	return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel


