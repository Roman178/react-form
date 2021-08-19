import { useState, useEffect, useRef, createRef } from "react";
import "./App.scss";
import Input from "./components/Input/Input";
import FileInput from "./components/FileInput/FileInput";

function App(props) {
  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();

  const inputs = [inputName, inputLastName, inputEmail];

  useEffect(() => {
    console.log(inputs);
  }, []);

  const [valids, setValid] = useState({
    inputNameValid: inputName.current.validity.valid,
    inputLastNameValid: inputLastName.current.validity.valid,
    inputEmailValid: inputEmail.current.validity.valid,
  });

  function focusInputs() {
    inputs.forEach((i) => i.current.focus());
  }

  return (
    <div className="App">
      <Input
        refInput={inputName}
        name="Имя"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />

      <Input
        refInput={inputLastName}
        name="Фамилия"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />
      <Input
        refInput={inputEmail}
        name="Электронная почта"
        type="email"
        invalidMsg="Пожалуйста, укажите электронную почту"
      />
      <FileInput loadMsg="Загрузить резюме" />
      <button onClick={focusInputs}>test</button>
    </div>
  );
}

export default App;
