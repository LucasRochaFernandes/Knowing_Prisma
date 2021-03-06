import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const newUser = await createUserUseCase.execute(name, email);

    return response.status(201).json(newUser)
  }
}
