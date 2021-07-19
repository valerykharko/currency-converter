import Router from "express";
import { mainControl } from "../controllers/mainController.js";

export const mainRouter = new Router();

mainRouter.get("/main", mainControl.getMain);
mainRouter.put("/update-main", mainControl.updateCurrencies);
mainRouter.get("/new", mainControl.getNewCurrencies);
