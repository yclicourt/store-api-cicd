import { check } from "express-validator";

import { validateResult } from "../utils/validator.handle";
import { NextFunction, Request, Response } from "express";

export const validatorGetFile = [
  check("id").exists().notEmpty().isNumeric(),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
