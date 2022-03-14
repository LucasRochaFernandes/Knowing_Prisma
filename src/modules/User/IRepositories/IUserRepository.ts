import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
}
