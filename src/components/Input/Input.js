import React, { useState, useEffect } from "react";
import styles from "./Input.module.scss";

const Input = function (props) {
  const [isValid, setValid] = useState(undefined);
  const [value, setValue] = useState("");

  useEffect(() => {
    props.passValid(isValid, props.id);
  }, [isValid]);

  useEffect(() => {
    if (props.formSent) setValue("");
  }, [props.formSent]);

  const checkValid = (evt) => {
    setValid(evt.target.validity.valid);
  };

  const handleChange = (evt) => {
    setValid(evt.target.validity.valid);
    setValue(evt.target.value);
    if (props.id === "inputName") props.passName(evt.target.value);
  };

  return (
    <label htmlFor={props.type} className={styles["input-box"]}>
      {`${props.name} ${props.required ? "*" : ""}`}
      <input
        className={`${styles["input"]} ${
          isValid === false ? styles["invalid-typing"] : ""
        }`}
        ref={props.refInput}
        required={props.required}
        placeholder={props.name}
        id={props.id}
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
    </label>
  );
};

export default Input;
