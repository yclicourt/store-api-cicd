import { Product } from "../interfaces/products.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getProduct = async (id: number) => {
  const responseItem = await prisma.product.findFirst({
    where: {
      id,
    },
  });
  return responseItem;
};

const getProducts = async () => {
  const responseItems = await prisma.product.findMany({});
  return responseItems;
};

const createProduct = async (item: Product) => {
  const responseInsert = await prisma.product.create({
    data: {
      title: item.title,
      description: item.description ,
      price: item.price,
      images: item.images,
      category: {
        connect: {
          id: item.categoryId,
        },
      },
    },
  });
  return responseInsert;
};

const updateProduct = async (id: number, data: Product) => {
  const responseUpdated = await prisma.product.update({
    where: {
      id,
    },
    data: {
      description: data.description,
      price: data.price,
      title: data.title,
      images: data.images,
      category: {
        connect: {
          id: data.categoryId,
        },
      },
    },
  });
  return responseUpdated;
};

const deleteProduct = async (id: number) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

const productByCategory = async (id: number) => {
  const responseItem = await prisma.product.findFirst({
    where: {
      categoryId: id,
    },
  });

  return responseItem;
};

export {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  productByCategory,
};
