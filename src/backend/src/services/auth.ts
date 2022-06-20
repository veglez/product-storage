import { User } from "../models";
import UserSchema from "../models/user";

import bcrypt from "bcrypt";

class UserService {
  static async getAll() {
    return await User.find();
  }

  static async createUser(userInfo: UserSchema) {
    const { password } = userInfo;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ ...userInfo, password: hashedPassword });
      return user.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(id: string) {
    return await User.findById(id);
  }

  static async getUser(parameters: Partial<UserSchema>) {
    return await User.findOne(parameters);
  }

  static async login(payload: UserSchema) {
    const { email, password } = payload;
    const user = await User.findOne({ email });
    if (!user) throw { message: "User and/or password incorrect" };
    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) return user;

    throw new Error("User and/or password incorrect");
  }

  static async changePassword(recoveryToken, newPassword) {
    const payload = jwtHelper.verifyRefreshToken(recoveryToken);
    const hash = await bcrypt.hash(newPassword, 14);
    const updatedUser = await User.findByIdAndUpdate(
      payload.sub,
      {
        password: hash,
      },
      { new: true }
    );
    return updatedUser;
  }
}

export default UserService;
