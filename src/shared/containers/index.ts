import { UserRepository } from "@modules/User/IRepositories/implementations/UserRepository";
import { IUserRepository } from "@modules/User/IRepositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
