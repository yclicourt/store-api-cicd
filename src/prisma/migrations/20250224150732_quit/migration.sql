/*
  Warnings:

  - You are about to drop the column `images` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "images";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "images";
