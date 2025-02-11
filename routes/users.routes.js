import { Router } from "express";
import UsersController from "../controllers/users.contoller.js";

const usersRoute = Router();
const controller = new UsersController();

usersRoute.get("/", controller.index);
usersRoute.get("/:id", controller.show);

usersRoute.post("/", controller.create);

usersRoute.put("/:id", controller.update);

usersRoute.delete("/:id", controller.delete);

export default usersRoute;
