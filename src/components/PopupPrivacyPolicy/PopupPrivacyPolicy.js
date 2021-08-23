import React from "react";
import Text from "./Text";
import styles from "./PopupPrivacyPolicy.module.scss";
import closeBtn from "../../images/close.svg";

class PopupPrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupIsOpened: false,
    };
    this.closePopup = this.closePopup.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.openedPopup !== prevProps.openedPopup) {
      this.setState({ popupIsOpened: !this.state.popupIsOpened });
    }
    if (this.props.openedPopup === true && this.state.popupIsOpened === true) {
      setTimeout(() => window.addEventListener("click", this.closePopup), 0);
    }
  }

  closePopup(evt) {
    if (
      evt.target.closest("#popup-window-priv-policy") &&
      evt.target.id !== "btn-confirm" &&
      evt.target.id !== "close-priv-policy-btn-icon"
    ) {
      return;
    }
    if (evt.target.id === "btn-confirm") {
      this.props.agreePolicy();
    }
    this.props.closePopup();
    return window.removeEventListener("click", this.closePopup);
  }

  render() {
    return (
      <div
        className={`${styles["popup"]} ${
          this.state.popupIsOpened ? styles["opened"] : ""
        }`}
      >
        <div id="popup-window-priv-policy" className={styles["window"]}>
          <div id="text-box" className={styles["text-box"]}>
            <h2 className={styles["title"]}>Политика конфиденциальности</h2>
            <div className={styles["paragraph-box"]}>
              <Text />
            </div>
          </div>
          <button
            id="btn-confirm"
            onClick={this.closePopup}
            className={styles["btn-confirm"]}
          >
            Я согласен
          </button>
          <button className={styles["close-btn"]}>
            <img
              id="close-priv-policy-btn-icon"
              src={closeBtn}
              alt="закрыть окно"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default PopupPrivacyPolicy;
