import React from "react";
import styles from "./Popup.module.scss";

function Popup(props) {
  return (
    <div className={styles["opened"]}>
      <div className={styles["wrapper"]}>
        <h1>Спасибо Егор</h1>
        <p>Мы скоро свяжемся с вами</p>
        <button className={styles["btn"]}>Понятно</button>
      </div>
    </div>
  );
}

export default Popup;
