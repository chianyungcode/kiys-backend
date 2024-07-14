import { type User } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { UserValidation } from "../validation/users-validation";
import { z } from "zod";
import { argon2id } from "../lib/oslo";

export class UserService {
  static async register(user: z.infer<typeof UserValidation.register>) {
    const hashedPassword = await argon2id.hash(user.password);

    const newUser = await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword,
        address: user.address,
      },
    });

    return newUser;
  }
  static async findUserByEmail(email: string) {
    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return userExists;
  }
}
