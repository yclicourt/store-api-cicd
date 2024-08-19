import { Request, response, Response } from "express";
import { loginUser, registerUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
