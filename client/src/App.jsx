import React, { useEffect } from "react";
import styles from "./styles/App.module.scss";
import CurrenciesList from "./components/СurrenciesList";
import { fetchCurrencies } from "./thunk/currencies";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let realMonth = month + 1;

  if (realMonth < 10) {
    realMonth = "0" + realMonth;
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Конвертер валют</h1>
        <span className={styles.mini_title}>По курсу НБ РБ</span>
        <div className={styles.text}>
          <p>Официальный курс, устанавливаемый Национальным </p>
          <p>
            банком Республики Беларусь на{" "}
            <span>
              {day}.{realMonth}.{year}
            </span>
          </p>
        </div>
        <div className={styles.block}>
          <CurrenciesList />
        </div>
      </div>
    </div>
  );
};

export default App;
