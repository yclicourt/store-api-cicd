import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../services/categories";

const getItem = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.id);
    const response = await getCategory(itemId);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCategories();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await createCategory(body);
    res.send(response);
  } catch (error) {
    console.log(error);
    handleHttp(res, "ERROR_CREATE_ITEM");
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedId = parseInt(req.params.id);
    const { body } = req;
    const response = await updateCategory(updatedId, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedId = parseInt(req.params.id);
    await deleteCategory(deletedId);
    res
      .status(200)
      .json({
        message: `Has been eliminated a category with a id ${deletedId}`,
      });
  } catch (error: any) {
    if (error?.code === "P2025") {
      res.status(404).json({ message: "Category not found" });
    } else {
      handleHttp(res, "ERROR_DELETE_ITEM");
    }
  }
};

export { getItem, getItems, createItem, updateItem, deleteItem };
