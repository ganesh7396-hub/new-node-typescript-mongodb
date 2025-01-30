import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import UserRouter from "./routes/User.router";
import logger from "./middlewares/logger";
import errorHandler from "./middlewares/errorHandler";


dotenv.config();

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(logger)

  }

  private routes() {
    this.app.use("/api/user", UserRouter);
  
  }

  private errorHandling() {
    this.app.use(errorHandler)
  }

}

export default new App().app
