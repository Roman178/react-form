import React, { useState, useEffect } from "react";
import PopupPrivacyPolicy from "../PopupPrivacyPolicy/PopupPrivacyPolicy";
import styles from "./Checkbox.module.scss";

function Checkbox(props) {
  const [checked, setCheck] = useState(undefined);
  const [privatePolicyIsOpened, setPrivacyPolicyIsOpened] = useState(false);

  useEffect(() => {
    props.onChecked(checked);
  }, [checked]);

  useEffect(() => {
    if (props.formSent) setCheck(undefined);
  }, [props.formSent]);

  function handleChange(evt) {
    setCheck(evt.target.checked);
  }
  return (
    <div className={styles["box"]}>
      <input
        className={styles["checkbox-btn"]}
        onChange={handleChange}
        checked={checked}
        type="checkbox"
        name="privacy-policy"
        id="privacy-policy"
      />
      <label className={styles["label"]} htmlFor="privacy-policy">
        <span>* Я согласен с </span>
      </label>
      <a
        href="#!"
        className={styles["link"]}
        onClick={() => setPrivacyPolicyIsOpened(true)}
      >
        политикой конфиденциальности
      </a>
      <span
        className={
          props.checkFromParent === false ? styles["invalid"] : styles["valid"]
        }
      >
        {props.invalidMsg}
      </span>
      <PopupPrivacyPolicy
        agreePolicy={() => setCheck(true)}
        closePopup={() => setPrivacyPolicyIsOpened(false)}
        openedPopup={privatePolicyIsOpened}
      />
    </div>
  );
}

export default Checkbox;
