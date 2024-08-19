import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItemProductByCategory,
  getItems,
  updateItem,
} from "../controllers/products";
import { checkJWT } from "../middleware/session";
import {
  validatorCreateProduct,
  validatorGetProduct,
} from "../validators/product";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    ProductDTO:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: the auto-generated id of product
 *        title:
 *          type: string
 *          description: the title of the product
 *        price:
 *          type: integer
 *          description: the description of price at product
 *        description:
 *          type: string
 *          description: the description of the product
 *        categoryId:
 *          type: integer
 *          description: the description of the associate by category
 *        images: 
 *          type: string
 *          description: the description of the product
 *      required:
 *        - name
 *    ProductNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: a message for the not found product
 *      example:
 *        msg: Product was not found
 * 
 *  parameters:
 *    productId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: the product id 
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
 *  name: Products
 *  description: Products endpoints 
 */

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    summary: Return a Product List
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200: 
 *        description: the list of products
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ProductDTO'
 *                
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  get:
 *    summary: Return a Product by id
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    responses:
 *      200: 
 *        description: the product was found
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ProductDTO'
 *      404:
 *        description: the product was not found
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *              
 *                
 */
router.get("/:id", validatorGetProduct, getItem);

/**
 * @swagger
 * /api/v1/products:
 *  post:
 *    summary: Create a new product
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductDTO'
 *    responses:
 *      201:
 *        description: the product succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductDTO'
 *      500:
 *        description: some server error
 */

router.post("/", validatorCreateProduct, createItem);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  put:
 *    summary: Update a Product by id
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/ProductId'
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductDTO'
 *    responses:
 *      200: 
 *        description: the update product
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/ProductDTO'
 *      404:
 *        description: the product was not found
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *              
 *                
 */

router.put("/:id", validatorGetProduct, updateItem);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  delete:
 *    summary: Delete a Product by id
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    responses:
 *      200: 
 *        description: the product was eliminated succesfully
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ProductDTO'
 *      404:
 *        description: the product was not found
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *              
 *                
 */

router.delete("/:id", validatorGetProduct, deleteItem);

/**
 * @swagger
 * /api/v1/products/{id}/categories:
 *  get:
 *    summary: Get Product by id Category 
 *    tags: [Products]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *    responses:
 *      200: 
 *        description: 
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/ProductDTO'
 *      404:
 *        description: the product was not found
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *              
 *                
 */

router.get("/:id/categories", validatorGetProduct, getItemProductByCategory);

export { router };
