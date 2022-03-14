
import { IUserRepository } from "@modules/User/IRepositories/IUserRepository";
import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}
  async execute(name: string, email: string): Promise<User> {
    return await this.userRepository.create({ name, email });
  }
}
