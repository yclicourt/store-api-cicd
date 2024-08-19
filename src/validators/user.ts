import { check } from "express-validator";

import { validateResult } from "../utils/validator.handle";
import { NextFunction, Request, Response } from "express";

export const validatorRegisterUser = [
  check("name").exists().notEmpty().isString(),
  check("lastname").exists().notEmpty().isString(),
  check("email")
    .exists()
    .notEmpty()
    .isEmail({ allow_utf8_local_part: true, allow_display_name: true }),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];

export const validatorLoginUser = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req: Request, res: Response, next: NextFunction) =>
    validateResult(req, res, next),
];
