import React, { useEffect, useState } from "react";
import styles from "../styles/CurrencyItem.module.scss";
import { useDispatch } from "react-redux";
import {
  removeCurrencyAction,
  setCollectionAction,
} from "../store/actions/currencies";

const CurrencyItem = ({ currency }) => {
  const [variable, setVariable] = useState(currency.value);

  const dispatch = useDispatch();

  const a = currency.Cur_Abbreviation;
  const b = variable;

  const object = {};
  object.name = a;
  object.value = b;

  useEffect(() => {
    if (variable !== currency.value) {
      dispatch(setCollectionAction(object));
    }
  }, [dispatch, variable]);

  const flag = () => {
    if (
      currency.Cur_Abbreviation === "USD" ||
      currency.Cur_Abbreviation === "EUR" ||
      currency.Cur_Abbreviation === "RUB" ||
      currency.Cur_Abbreviation === "BYN"
    ) {
      return false;
    } else return true;
  };


  return (
    <>
      <div className={styles.card}>
        <div className={styles.item}>{currency.Cur_Abbreviation}</div>
        <input
          onChange={(e) => {
            setVariable(Number(e.target.value));
          }}
          className={styles.input}
          placeholder="Введите число"
          type="number"
          value={currency.value}
        />
        {flag() ? (
          <button
            className={styles.delete}
            onClick={() => dispatch(removeCurrencyAction(currency))}
          >
            {}
          </button>
        ) : null}
      </div>
      <p className={styles.description}>{currency.Cur_Name}</p>
    </>
  );
};

export default CurrencyItem;
