import React from "react";

class SendButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const disabledBtn = <button disabled>Отправить</button>;
    const enabledBtn = <button>Отправить</button>;
    return disabledBtn;
  }
}

export default SendButton;
