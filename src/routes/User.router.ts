import { Router } from "express";
import UserController from "../controllers/User.controller";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post("/", UserController.createUser);
    this.router.get("/", UserController.getUsers);
  }
}

export default new UserRouter().router;
