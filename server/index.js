import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import { errorHandler } from "./middleware/ErrorHandlingMiddleware.js";

dotenv.config()
const PORT = process.env.PORT || 5000;

const index = express();

index.use(cors());
index.use(express.json());
index.use("/api", router);

index.use(errorHandler);

const start = async () => {
  try {
    index.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
