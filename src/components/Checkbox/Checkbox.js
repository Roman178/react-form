import React, { useState, useEffect } from "react";

function Checkbox(props) {
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    props.onChecked(checked);
  }, [checked]);

  function handleChange(evt) {
    setCheck(evt.target.checked);
  }
  return (
    <label htmlFor="">
      <input onChange={handleChange} type="checkbox" name="" id="" />
      {props.textLabel}
    </label>
  );
}

export default Checkbox;
