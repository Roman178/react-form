import React from "react";
import styles from "./SendButton.module.scss";

class SendButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={
          this.props.formIsValid ? styles["valid-btn"] : styles["invalid-btn"]
        }
        onClick={this.props.onClick}
        type="submit"
      >
        Отправить
      </button>
    );
  }
}

export default SendButton;
