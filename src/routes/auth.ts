import express from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import { validatorLoginUser } from "../validators/user";
import { validatorRegisterUser } from "../validators/user";


const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    UserDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of user
 *        name:
 *          type: string
 *          description: the description of the name
 *        lastname:
 *          type: string
 *          description: the description of the lastname
 *        email:
 *          type: string
 *          description: the email of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *      required:
 *        - name
 *        - email
 *        - password
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found user
 *      example:
 *        msg: User was not found
 * 
 *      
 */
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth endpoints 
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: Create a new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserDTO'
 *    responses:
 *      200:
 *        description: the user succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserDTO'
 *      500:
 *        description: some server error
 */
router.post("/register", validatorRegisterUser, registerCtrl);

/**
 * @swagger
 * components:
 *  schemas:
 *    UserDTO:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: the email of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *      required:
 *        - email
 *        - password
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found user
 *      example:
 *        msg: User was not found
 * 
 *      
 */
/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: Login a user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserDTO'
 *    responses:
 *      200:
 *        description: the user login succesfully 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserDTO'
 *      500:
 *        description: some server error
 */
router.post("/login", validatorLoginUser, loginCtrl);

export { router };
