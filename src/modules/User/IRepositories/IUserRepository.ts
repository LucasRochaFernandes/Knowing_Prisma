import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  delete(user_id: string): Promise<void>;
  alterName(user_id: string, name: string): Promise<User | null>;
  getById(user_id: string, name: string): Promise<User | null>;
}
