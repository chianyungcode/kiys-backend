import { prisma } from "../../prisma/client";
import { Prisma } from "@prisma/client";
import { CategoryValidation } from "../validation/category-validation";
import { ProductValidation } from "../validation/product-validation";
import { z } from "zod";

export class CategoryService {
  static async create(category: z.infer<typeof CategoryValidation.create>) {
    const { name, slug, description } = category;

    const newCategory = await prisma.category.create({
      data: {
        name,
        slug,
        description,
      },
    });

    return newCategory;
  }

  static async getProducts() {
    const categories = await prisma.category.findMany();

    return categories;
  }

  //   static async getProduct(id: string) {
  //     try {
  //       const category = await prisma.category.findUniqueOrThrow({
  //         where: {
  //           id,
  //         },
  //       });

  //       return category;
  //     } catch (error: any) {
  //       if (
  //         error instanceof Prisma.PrismaClientKnownRequestError &&
  //         error.code === "P2025"
  //       ) {
  //         return "Category not found";
  //       } else {
  //         throw new Error(
  //           `An error occurred while fetching the category: ${error.message}`
  //         );
  //       }
  //     }
  //   }

  static async getProduct(id: string) {
    const category = await prisma.category.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return category;
  }

  static async update(
    id: string,
    updatedCategory: z.infer<typeof CategoryValidation.update>
  ) {
    const category = await prisma.category.update({
      where: { id },
      data: updatedCategory,
    });

    return category;
  }

  static async deleteProduct(id: string) {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }

  static async deleteProducts() {
    await prisma.category.deleteMany();
  }
}
