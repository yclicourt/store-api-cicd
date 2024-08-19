import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/categories";
import { checkJWT } from "../middleware/session";
import {
  validatorCreateCategory,
  validatorGetCategory,
} from "../validators/category";

const router = express.Router();

router.get("/", checkJWT, getItems);
router.get("/:id", checkJWT, validatorGetCategory, getItem);
router.post("/", checkJWT, validatorCreateCategory, createItem);
router.put("/:id", checkJWT, validatorGetCategory, updateItem);
router.delete("/:id", checkJWT, validatorGetCategory, deleteItem);

export { router };
