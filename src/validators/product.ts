import { check } from "express-validator";

import { validateResult } from "../utils/validator.handle";
import { NextFunction, Request, Response } from "express";

export const validatorCreateProduct = [
  check("title").exists().notEmpty().isString(),
  check("price").exists().notEmpty().isNumeric(),
  check("description").exists().notEmpty().isString(),
  check("images").exists().notEmpty(),
  check("categoryId").exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorGetProduct = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
