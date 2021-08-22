import React, { useState, useEffect } from "react";
import PopupPrivacyPolicy from "../PopupPrivacyPolicy/PopupPrivacyPolicy";

function Checkbox(props) {
  const [checked, setCheck] = useState(false);
  const [privatePolicyIsOpened, setPrivacyPolicyIsOpened] = useState(false);

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
        * Я согласен с{" "}
        <a onClick={() => setPrivacyPolicyIsOpened(true)}>
          политикой конфиденциальности
        </a>
      </label>
      <PopupPrivacyPolicy
        agreePolicy={() => setCheck(true)}
        closePopup={() => setPrivacyPolicyIsOpened(false)}
        openedPopup={privatePolicyIsOpened}
      />
    </div>
  );
}

export default Checkbox;
