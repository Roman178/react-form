import React, { useState, useRef, useEffect } from "react";
import styles from "./Input.module.scss";

const Input = function (props) {
  const [isValid, setValid] = useState(undefined);
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
        ref={props.refInput}
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
      <span className={isValid === false ? styles["invalid"] : styles["valid"]}>
        {props.invalidMsg}
      </span>
    </div>
  );
};

export default Input;
