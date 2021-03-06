import React, { useState, useEffect } from "react";
import styles from "./Radio.module.scss";

function RadioGroup(props) {
  const [selectedRadio, setRadio] = useState("init");

  useEffect(() => {
    props.onSelectedRadio(selectedRadio);
  }, [selectedRadio]);

  useEffect(() => {
    if (props.formSent) setRadio("init");
  }, [props.formSent]);

  function handleValueChange(evt) {
    setRadio(evt.target.value);
  }

  return (
    <fieldset className={styles["fieldset"]}>
      <div className={styles["wrapper"]}>
        <legend className={styles["legend"]}>{`${props.title} *`}</legend>
        <p
          className={
            props.isRadioBtnSelected ? styles["valid"] : styles["invalid"]
          }
        >
          {props.invalidMsg}
        </p>
      </div>
      {props.data.map((d) => {
        return (
          <label className={styles["label"]} key={d} htmlFor={d}>
            <input
              className={styles["radio-btn"]}
              checked={selectedRadio === d}
              value={d}
              onChange={handleValueChange}
              type="radio"
              name={d}
              id={d}
            />
            {d}
          </label>
        );
      })}
    </fieldset>
  );
}

export default RadioGroup;
