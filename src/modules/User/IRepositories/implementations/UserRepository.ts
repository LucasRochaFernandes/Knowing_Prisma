import { ICreateUserDTO } from "@modules/User/dtos/ICreateUserDTO";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Prisma.UserDelegate<User>;

  constructor() {
    this.repository = new PrismaClient().user;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    return await this.repository.create({
      data,
    });
  }
}
