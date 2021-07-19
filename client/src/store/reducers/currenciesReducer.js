const defaultState = {
  currencies: [],
  new_currencies: [],
  collection: {},
};

export const GET_DEFAULT_CURRENCIES = "GET_DEFAULT_CURRENCIES";
export const UPDATE_CURRENCIES = "UPDATE_CURRENCIES";
export const UPDATE_NEW_CURRENCIES = "UPDATE_NEW_CURRENCIES";
export const GET_NEW_CURRENCIES = "GET_NEW_CURRENCY";
export const ADD_NEW_CURRENCY = "ADD_NEW_CURRENCY";
export const REMOVE_CURRENCY = "REMOVE_CURRENCY";
export const SET_COLLECTION = "SET_COLLECTION";

export default function currenciesReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_DEFAULT_CURRENCIES:
      return {
        ...state,
        currencies: [...action.payload],
      };
    case UPDATE_CURRENCIES:
      return {
        ...state,
        currencies: [...action.payload],
      };
      case UPDATE_NEW_CURRENCIES:
      return {
        ...state,
        new_currencies: [...action.payload],
      };
    case GET_NEW_CURRENCIES:
      return {
        ...state,
        new_currencies: [...action.payload],
      };
    case ADD_NEW_CURRENCY:
      return {
        ...state,
        currencies: [...state.currencies, action.payload],
        new_currencies: state.new_currencies.filter(
          (new_currency) =>
            new_currency.Cur_Abbreviation !== action.payload.Cur_Abbreviation
        ),
      };
    case REMOVE_CURRENCY:
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) =>
            currency.Cur_Abbreviation !== action.payload.Cur_Abbreviation
        ),
        new_currencies: [action.payload, ...state.new_currencies ],
      };
    case SET_COLLECTION:
      return {
        ...state,
        collection: action.payload,
      };
    default:
      return state;
  }
}
