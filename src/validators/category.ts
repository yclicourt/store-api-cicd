import { check } from "express-validator";

import { validateResult } from "../utils/validator.handle";
import { NextFunction, Request, Response } from "express";

export const validatorCreateCategory = [
  check("name").exists().notEmpty().isString(),
  check("images").exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorGetCategory = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
