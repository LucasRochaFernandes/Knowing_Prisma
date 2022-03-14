import { ICreateUserDTO } from "@modules/User/dtos/ICreateUserDTO";
import { Prisma, PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Prisma.UserDelegate<User>;

  constructor() {
    this.repository = new PrismaClient().user;
  }
  async getById(user_id: string): Promise<User | null> {
    return await this.repository.findUnique({ where: { id: user_id } });
  }
  async delete(user_id: string): Promise<void> {
    await this.repository.delete({ where: { id: user_id } });
  }
  async alterName(user_id: string, name: string): Promise<User | null> {
    return await this.repository.update({
      data: { name: name },
      where: { id: user_id },
    });
  }

  async create(data: ICreateUserDTO): Promise<User> {
    return await this.repository.create({
      data,
    });
  }
}
