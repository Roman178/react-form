import { useState } from "react";
import "./App.scss";
import Input from "./components/Input/Input";
import FileInput from "./components/FileInput/FileInput";

function App(props) {
  const [inputs, setInput] = useState([]);

  function checkValid() {}

  function test(isValid) {
    setInput(inputs.push(isValid));
    console.log(inputs);
  }

  return (
    <div className="App">
      <Input
        addValid={test}
        name="Имя"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />
      <Input
        addValid={test}
        name="Фамилия"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />
      <Input
        addValid={test}
        name="Электронная почта"
        type="email"
        invalidMsg="Пожалуйста укажите электронную почту"
      />

      <FileInput loadMsg="Загрузить" />
      <button onClick={checkValid}>Test</button>
    </div>
  );
}

export default App;
