import React, { useState, useEffect } from "react";
import styles from "./Radio.module.scss";

function RadioGroup(props) {
  const [selectedRadio, setRadio] = useState("init");

  useEffect(() => {
    props.onSelectedRadio(selectedRadio);
  }, [selectedRadio]);

  function handleValueChange(evt) {
    setRadio(evt.target.value);
  }

  return (
    <fieldset>
      <legend>{props.title}</legend>
      <p
        className={
          props.isRadioBtnSelected ? styles["valid"] : styles["invalid"]
        }
      >
        {props.invalidMsg}
      </p>
      {props.data.map((d) => {
        return (
          <label key={d} htmlFor={d}>
            <input
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
