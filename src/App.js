import "./App.scss";
import Input from "./components/Input/Input";
import FileInput from "./components/FileInput/FileInput";

function App() {
  return (
    <div className="App">
      <Input
        name="Имя"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />
      <Input
        name="Фамилия"
        type="text"
        invalidMsg="В имени могут быть только буквы"
        pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
      />
      <Input
        name="Электронная почта"
        type="email"
        invalidMsg="Пожалуйста укажите электронную почту"
      />

      <FileInput />
    </div>
  );
}

export default App;
