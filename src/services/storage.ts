import { Storage } from "../interfaces/storage.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const uploadFile = async ({ filename, idUser, path }: Storage) => {
  const responseItem = await prisma.storage.create({
    data: {
      filename,
      idUser,
      path,
    },
  });
  return responseItem;
};

export { uploadFile };
