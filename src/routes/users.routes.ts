import { Router } from "express";

const userRoutes = Router();

import { CreateUserController } from "@modules/User/useCases/createUser/CreateUserController";
const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
