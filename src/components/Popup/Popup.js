import React, { useEffect, useState } from "react";
import styles from "./Popup.module.scss";

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
    if (evt.target.closest("#text-box")) {
      return;
    }
    props.setInitialForm();
    return window.removeEventListener("click", closePopup);
  }

  return (
    <div
      className={`${styles["popup"]} ${popupIsOpened ? styles["opened"] : ""}`}
    >
      <div className={styles["wrapper"]}>
        <div id="text-box" className={styles["text-box"]}>
          <h1 className={styles["title"]}>Спасибо {props.candidateName}</h1>
          <p className={styles["subtitle"]}>Мы скоро свяжемся с вами</p>
        </div>
        <button onClick={closePopup} className={styles["btn"]}>
          Понятно
        </button>
      </div>
    </div>
  );
}

export default Popup;
