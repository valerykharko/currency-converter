import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/AddCurrency.module.scss";
import Modal from "./Modal";

const AddCurrency = () => {
  const [modalActive, setModalActive] = useState(false);
  const sortRef = useRef();

  const toggleVisibleModal = () => {
    setModalActive(!modalActive);
  };

  const handleOutSideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setModalActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, []);

  return (
    <>
      <div className={styles.block}>
        <div ref={sortRef}>
          <button className={styles.button} onClick={toggleVisibleModal}>
            <div className={styles.plus}>{}</div>
            <span className={styles.text}>Добавить валюту</span>
          </button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default AddCurrency;
