import React, { useState, useRef, useEffect } from "react";
import styles from "./Input.module.scss";

function Input(props) {
  const [isValid, setValid] = useState(null);
  const [value, setValue] = useState("");

  const inputEl = useRef(false);

  const checkValid = (evt) => {
    setValid(evt.target.validity.valid);
    props.addValid(isValid);
  };

  const handleChange = (evt) => {
    setValid(evt.target.validity.valid);
    setValue(evt.target.value);
    props.addValid(isValid);
  };

  return (
    <div className={styles["input-box"]}>
      <label htmlFor={props.type}>{props.name}</label>
      <input
        ref={inputEl}
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
      <button
        onClick={() => {
          inputEl.current.focus();
        }}
      >
        Test
      </button>
    </div>
  );
}

export default Input;
