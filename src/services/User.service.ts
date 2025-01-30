import UserModel, { IUser } from "../models/User.model";

class UserService {
  async createUser(data: IUser): Promise<IUser> {
    return await UserModel.create(data);
  }

  async getUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }
}

export default new UserService();
