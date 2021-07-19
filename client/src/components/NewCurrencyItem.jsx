import React from "react";
import styles from "../styles/NewCurrencyItem.module.scss";
import { useDispatch } from "react-redux";
import { addNewCurrencyAction } from "../store/actions/currencies";

const NewCurrencyItem = ({ currency, setActive }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles.block}
        onClick={() => {
          dispatch(addNewCurrencyAction(currency));
          setActive(false);
        }}
      >
        <div className={styles.item}>{currency.Cur_Abbreviation}</div>
        <div className={styles.description}>{currency.Cur_Name}</div>
      </div>
    </>
  );
};

export default NewCurrencyItem;
