import app from "./app";
import { swaggerDocs } from "./routes/swagger";

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
  console.log(`Server listening by port ${PORT}`);
});
