import {
  ADD_NEW_CURRENCY,
  GET_DEFAULT_CURRENCIES,
  GET_NEW_CURRENCIES,
  REMOVE_CURRENCY,
  SET_COLLECTION,
  UPDATE_CURRENCIES, UPDATE_NEW_CURRENCIES,
} from "../reducers/currenciesReducer";

export const getDefaultCurrenciesAction = (payload) => ({
  type: GET_DEFAULT_CURRENCIES,
  payload,
});

export const updateCurrenciesAction = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
})

export const updateNewCurrenciesAction = (payload) => ({
  type: UPDATE_NEW_CURRENCIES,
  payload,
});

export const getNewCurrenciesAction = (payload) => ({
  type: GET_NEW_CURRENCIES,
  payload,
});

export const addNewCurrencyAction = (payload) => ({
  type: ADD_NEW_CURRENCY,
  payload,
});

export const removeCurrencyAction = (payload) => ({
  type: REMOVE_CURRENCY,
  payload,
});

export const setCollectionAction = (payload) => ({
  type: SET_COLLECTION,
  payload,
});
