import React from "react";
import { test } from "./Button.module.scss";
const Button = () => {
  return (
    <>
      <button
        className={test}
        onClick={() => alert("I am styled with CSS Modules")}
      >
        I am button 2 - Press Me
      </button>
    </>
  );
};
export default Button;
