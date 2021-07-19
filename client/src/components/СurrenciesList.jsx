import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyItem from "./CurrencyItem";
import { fetchUpdateCurrencies } from "../thunk/currencies";
import AddCurrency from "./AddCurrency";

const CurrenciesList = () => {
  const dispatch = useDispatch();
  const { currencies, new_currencies, collection } = useSelector(
    ({ currencies }) => currencies
  );

  useEffect(() => {
    if (Object.keys(collection).length !== 0) {
      dispatch(fetchUpdateCurrencies([collection, currencies, new_currencies]));
    }
  }, [dispatch, collection]);

  return (
    <div>
      {currencies.length > 0 ? (
        <div>
          {currencies.map((currency, index) => (
            <CurrencyItem key={index} currency={currency} />
          ))}
        </div>
      ) : (
        <div>Произошла ошибка загрузки данных</div>
      )}
      <AddCurrency />
    </div>
  );
};

export default CurrenciesList;
