import dotenv from "dotenv";
dotenv.config();

import express from "express";
import config from "config";
import cookieParser from "cookie-parser";
import logger from "./utils/logger.js";
import router from "./routes/index.js";
import path from "path";
import { errorMiddleware } from "./middleware/error.middleware.js";

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);

//for deployment
app.use(express.static(path.join(__dirname, "/client/dist", )));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
})

const port = config.get("port");

app.listen(port, async () => {
  logger.info(`App is running on port ${port}`);
});

app.use(errorMiddleware);