import { Request, Response, NextFunction } from "express";
import UserService from "../services/User.service";

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
