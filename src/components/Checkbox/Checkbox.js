import React, { useState, useEffect } from "react";
import PopupPrivacyPolicy from "../PopupPrivacyPolicy/PopupPrivacyPolicy";

function Checkbox(props) {
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    props.onChecked(checked);
  }, [checked]);

  useEffect(() => {
    if (props.formSent) setCheck(false);
  }, [props.formSent]);

  function handleChange(evt) {
    setCheck(evt.target.checked);
  }
  return (
    <div>
      <label htmlFor="">
        <input
          onChange={handleChange}
          checked={checked}
          type="checkbox"
          name=""
          id=""
        />
        {props.textLabel}
      </label>
      <PopupPrivacyPolicy />
    </div>
  );
}

export default Checkbox;
