-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "images" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storage" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
