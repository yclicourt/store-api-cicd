import express from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import { validatorLoginUser } from "../validators/user";
import { validatorRegisterUser } from "../validators/user";

const router = express.Router();

router.post("/register", validatorRegisterUser, registerCtrl);
router.post("/login", validatorLoginUser, loginCtrl);

export { router };
