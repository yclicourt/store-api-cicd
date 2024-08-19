import { Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import express from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ECOMMERCE API STORE",
      version: "1.0.0",
      description: "ECOMMERCE API STORE",
    },
  },
  components: {
    securitySchemes: {
      Authorization: {
        type: "apiKey",
        in: "header",
        description:
          "All requests to the API should contain an Authorization header with your API Token",
        name: "Authorization",
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const router = express.Router();
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: any, port: any) => {
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available at http://localhost:${port}/api/v1/docs`
  );
};

export { swaggerDocs, router };
