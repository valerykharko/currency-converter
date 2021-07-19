import { $host } from "./config.js";
import {
  getDefaultCurrenciesAction,
  getNewCurrenciesAction,
  updateCurrenciesAction, updateNewCurrenciesAction,
} from "../store/actions/currencies";

export const fetchCurrencies = () => {
  return async function (dispatch) {
    await $host
      .get("/main")
      .then(({ data }) => dispatch(getDefaultCurrenciesAction(data)));
  };
};

export const fetchUpdateCurrencies = (payload) => {
  return async function (dispatch) {
    await $host
      .put("/update-main", payload)
      .then(({ data }) => {
        dispatch(updateCurrenciesAction(data[0]));
        dispatch(updateNewCurrenciesAction(data[1]));
      });
  };
};

export const fetchNewCurrencies = () => {
  return function (dispatch) {
    $host.get("/new").then(({ data }) => {
      dispatch(getNewCurrenciesAction(data));
    });
  };
};
