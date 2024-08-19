import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItemProductByCategory,
  getItems,
  updateItem,
} from "../controllers/products";
import { checkJWT } from "../middleware/session";
import {
  validatorCreateProduct,
  validatorGetProduct,
} from "../validators/product";

const router = express.Router();

router.get("/", getItems);
router.get("/:id", validatorGetProduct, getItem);
router.post("/", validatorCreateProduct, createItem);
router.put("/:id", validatorGetProduct, updateItem);
router.delete("/:id", validatorGetProduct, deleteItem);
router.get("/:id/categories", validatorGetProduct, getItemProductByCategory);

export { router };
