import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  productByCategory,
} from "../services/products";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.id);
    const response = await getProduct(itemId);
    const data = response ? response : "NOT FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getProducts();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};
const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await createProduct(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_ITEM");
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const updateId = parseInt(req.params.id);
    const { body } = req;
    const responseItem = await updateProduct(updateId, body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedId = parseInt(req.params.id);
    await deleteProduct(deletedId);
    res
      .status(200)
      .json({ message: `Has been eliminated a product with a id ${deletedId}` });
  } catch (error: any) {
    if (error?.code === "P2025") {
      res.status(400).json({ message: "Product not found" });
    } else {
      handleHttp(res, "ERROR_DELETE_ITEM");
    }
  }
};

const getItemProductByCategory = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await productByCategory(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_PRODUCT_BY_CATEGORY");
  }
};

export {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItemProductByCategory,
};
