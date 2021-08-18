import React, { useState } from "react";
import styles from "./Input.module.scss";

function Input(props) {
  const [isValid, setValid] = useState(true);
  const [value, setValue] = useState("");

  const checkValid = (evt) => {
    setValid(evt.target.validity.valid);
  };

  const handleChange = (evt) => {
    setValid(evt.target.validity.valid);
    setValue(evt.target.value);
  };

  return (
    <div className={styles["input-box"]}>
      <label htmlFor={props.type}>{props.name}</label>
      <input
        required
        placeholder={props.name}
        id={props.type}
        type={props.type}
        onFocus={checkValid}
        onBlur={checkValid}
        onChange={handleChange}
        value={value}
        pattern={props.pattern}
      />
      <span className={isValid ? styles["valid"] : styles["invalid"]}>
        {props.invalidMsg}
      </span>
    </div>
  );
}

export default Input;
