import  { Router } from "express";
import multerMiddleware from "../middleware/file";
import { uploadItem } from "../controllers/storage";
import { checkJWT } from "../middleware/session";

const router = Router();

router.post("/", checkJWT, multerMiddleware.single("myfile"), uploadItem);

export { router };
