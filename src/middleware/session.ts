import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || " ";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UNA_SESSION_VALIDA");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJWT };
