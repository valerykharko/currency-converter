import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewCurrencies } from "../thunk/currencies";
import NewCurrencyItem from "./NewCurrencyItem";

const NewCurrencies = ({setActive}) => {
  const dispatch = useDispatch();
  const { new_currencies } = useSelector(({ currencies }) => currencies);

  useEffect(() => {
    dispatch(fetchNewCurrencies());
  }, [dispatch]);

  return (
    <div>
      {new_currencies.length > 0 ? (
        <div>
          {new_currencies.map((currency, index) => (
            <NewCurrencyItem key={index} currency={currency} setActive={setActive}/>
          ))}
        </div>
      ) : (
        <div>Произошла ошибка загрузки данных</div>
      )}
    </div>
  );
};

export default NewCurrencies;
