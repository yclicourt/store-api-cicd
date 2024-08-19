import { Category } from "../interfaces/category.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategory = async (id: number) => {
  const responseItem = await prisma.category.findFirst({
    where: {
      id,
    },
  });
  return responseItem;
};

const getCategories = async () => {
  const responseItems = await prisma.category.findMany({});
  return responseItems;
};

const createCategory = async (item: Category) => {
  const responseInsert = await prisma.category.create({
    data: {
      images: item.images,
      name: item.name,
    },
  });
  return responseInsert;
};

const updateCategory = async (id: number, data: Category) => {
  const responseUpdated = await prisma.category.update({
    where: {
      id,
    },
    data: {
      images: data.images,
      name: data.name,
    },
  });
  return responseUpdated;
};

const deleteCategory = async (id: number) => {
  await prisma.category.delete({
    where: {
      id,
    },
  });
};

export {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
