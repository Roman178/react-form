import React, { useEffect, useState } from "react";
import styles from "./Popup.module.scss";
import closeBtn from "../../images/close.svg";

function Popup(props) {
  const [popupIsOpened, setPopupOpened] = useState(false);

  useEffect(() => {
    if (props.formSent) {
      setPopupOpened(true);
      window.addEventListener("click", closePopup);
    }
    if (!props.formSent) {
      setPopupOpened(false);
    }
  }, [props.formSent]);

  function closePopup(evt) {
    if (
      evt.target.closest("#popup-window") &&
      evt.target.id !== "main-popup-btn" &&
      evt.target.id !== "close-btn-icon"
    ) {
      return;
    }
    props.setInitialForm();
    return window.removeEventListener("click", closePopup);
  }

  return (
    <div
      className={`${styles["popup"]} ${popupIsOpened ? styles["opened"] : ""}`}
    >
      <div id="popup-window" className={styles["window"]}>
        <div className={styles["text-box"]}>
          <h2 className={styles["title"]}>Спасибо {props.candidateName} !</h2>
          <p className={styles["subtitle"]}>Мы скоро свяжемся с вами</p>
        </div>
        <button
          id="main-popup-btn"
          onClick={closePopup}
          className={styles["btn"]}
        >
          Понятно
        </button>
        <button className={styles["close-btn"]}>
          <img id="close-btn-icon" src={closeBtn} alt="закрыть окно"></img>
        </button>
      </div>
    </div>
  );
}

export default Popup;
