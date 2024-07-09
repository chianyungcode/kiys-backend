import { z } from "zod";

export namespace UserValidation {
  export const REGISTER = z
    .object({
      firstName: z.string().min(1, { message: "Minimum 1 character" }),
      lastName: z.string().min(1, { message: "Minimum 1 character" }),
      email: z.string().email(),
      password: z
        .string()
        .regex(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,}$/,
          {
            message:
              "Password must contain at least one digit number, one lowercase and one uppercase letter, one special character, and be at least 8 characters long",
          }
        ),
      confirmPassword: z.string().min(8),
      address: z.string().optional(),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Password doesn't match",
        path: ["confirmPassword"],
      }
    );
}