import e, { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Storage } from "../interfaces/storage.interface";
import { uploadFile } from "../services/storage";
import { RequestExt } from "../interfaces/req-ext";

const uploadItem = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      filename: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await uploadFile(dataToRegister);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPLOAD_FILE");
  }
};

export { uploadItem };
