import React from "react";
import "./App.module.scss";
import Form from "./components/Form/Form";
import styles from "./App.module.scss";

function App(props) {
  return (
    <div className={styles["app"]}>
      <Form />
    </div>
  );
}

export default App;
