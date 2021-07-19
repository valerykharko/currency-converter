import React from "react";
import "../styles/Modal.css";
import NewCurrencies from "./NewCurrencies";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <NewCurrencies setActive={setActive}/>
      </div>
    </div>
  );
};

export default Modal;
