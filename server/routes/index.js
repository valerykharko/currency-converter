import Router from "express";
import { mainRouter } from "./mainRouter.js";

export const router = new Router();

router.use("/currencies", mainRouter);
