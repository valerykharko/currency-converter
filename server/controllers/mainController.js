import { ApiError } from "../error/ApiError.js";
import { getMainCurrencies } from "../service/getMainCurrencies.js";
import { getNewCurrencies } from "../service/getNewCurrencies.js";
import { updateCurrencies } from "../service/updateCurrencies.js";
import { updateNewCurrencies } from "../service/updateNewCurrencies.js";

export class MainController {
  async getMain(req, res, next) {
    try {
      let mainCurrencies = await getMainCurrencies().then((payload) => {
        return payload;
      });

      return res.json(mainCurrencies);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateCurrencies(req, res, next) {
    try {
      const collection = req.body[0];
      const currencies = req.body[1];
      const newCurrencies = req.body[2];

      const info = await updateCurrencies(collection, currencies).then(
        (payload) => {
          return payload;
        }
      );

      const updatedNewCurrencies = updateNewCurrencies(
        collection,
        newCurrencies,
        info[1]
      );

      const data = [];
      data.push(info[0], updatedNewCurrencies);

      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getNewCurrencies(req, res, next) {
    try {
      let newCurrencies = await getNewCurrencies().then((newCurrencies) => {
        return newCurrencies;
      });

      return res.json(newCurrencies);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export const mainControl = new MainController();
