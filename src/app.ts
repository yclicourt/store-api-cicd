import "dotenv/config";
import express from "express";
import { corsMiddleware } from "./middleware/cors";
import { router } from "./routes";


const app = express();

app.use(corsMiddleware());
app.use(express.json())
app.use("/api/v1", router);


export default app