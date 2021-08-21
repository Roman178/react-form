import React from "react";
import styles from "./PopupPrivacyPolicy.module.scss";

class PopupPrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles["popup"]}></div>;
  }
}

export default PopupPrivacyPolicy;
