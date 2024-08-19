import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/categories";
import { checkJWT } from "../middleware/session";
import {
  validatorCreateCategory,
  validatorGetCategory,
} from "../validators/category";

const router = express.Router();


/**
 * @swagger
 * components:
 *  schemas:
 *    CategoryDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of category
 *        name:
 *          type: string
 *          description: the description of the category
 *        image:
 *          type: string
 *          description: the image of the category
 *      required:
 *        - name
 *    CategoryNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found category
 *      example:
 *        msg: Category was not found
 *
 *  parameters:
 *    categoryId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: the category id
 *
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 */

/**
 * @swagger
 * tags:
 *  name: Categories
 *  description: Categories endpoints
 */
/**
 * @swagger
 * /api/v1/categories:
 *  get:
 *    summary: Return a Category List
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: the list of categories
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/CategoryDTO'
 *
 */
router.get("/", checkJWT, getItems);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  get:
 *    summary: Return a Category by id
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *    responses:
 *      200:
 *        description: the category was found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/CategoryDTO'
 *      404:
 *        description: the category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *
 *
 */
router.get("/:id", checkJWT, validatorGetCategory, getItem);

/**
 * @swagger
 * /api/v1/categories:
 *  post:
 *    summary: Create a new category
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CategoryDTO'
 *    responses:
 *      200:
 *        description: the category succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryDTO'
 *      500:
 *        description: some server error
 */
router.post("/", checkJWT, validatorCreateCategory, createItem);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  put:
 *    summary: Update a Category by id
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CategoryDTO'
 *    responses:
 *      200:
 *        description: the update category
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/CategoryDTO'
 *      404:
 *        description: the category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *
 *
 */
router.put("/:id", checkJWT, validatorGetCategory, updateItem);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *  delete:
 *    summary: Delete a Category by id
 *    tags: [Categories]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *    responses:
 *      200:
 *        description: the category was eliminated succesfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/CategoryDTO'
 *      404:
 *        description: the category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *
 *
 */
router.delete("/:id", checkJWT, validatorGetCategory, deleteItem);

export { router };
