import React, { useState, useEffect, useRef, createRef } from "react";
import Input from "../Input/Input";
import FileInput from "../FileInput/FileInput";
import RadioGroup from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import SendButton from "../SendButton/SendButton";

function Form(props) {
  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputUrl = useRef();
  const refsInputsArr = [inputName, inputLastName, inputEmail, inputUrl];

  const [validationsInputs, setValidationsInputs] = useState({});
  const [selectedRadio, setRadio] = useState("init");
  const [checkedBox, setCheckBox] = useState(false);

  function checkForm() {
    refsInputsArr.forEach((i) => i.current.focus());
    if (selectedRadio === "init") setRadio("");
  }

  function handleSelectedRadio(passedRadio) {
    setRadio(passedRadio);
  }

  function handleCheckbox(isChecked) {
    setCheckBox(isChecked);
  }

  function handleValidInputs(isValid, inputId) {
    setValidationsInputs({ ...validationsInputs, [inputId]: isValid });
  }

  return (
    <form onSubmit={(evt) => evt.preventDefault()} className="form">
      <fieldset>
        <legend>Личные данные</legend>
        <Input
          required={true}
          refInput={inputName}
          id="inputName"
          passValid={handleValidInputs}
          name="Имя"
          type="text"
          invalidMsg="В имени могут быть только буквы"
          pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
        />
        <Input
          required={true}
          refInput={inputLastName}
          id="inputLastName"
          passValid={handleValidInputs}
          name="Фамилия"
          type="text"
          invalidMsg="В имени могут быть только буквы"
          pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
        />
        <Input
          required={true}
          refInput={inputEmail}
          passValid={handleValidInputs}
          id="inputEmail"
          name="Электронная почта"
          type="email"
          invalidMsg="Пожалуйста, укажите электронную почту"
        />
        <FileInput loadMsg="Загрузить резюме" />
      </fieldset>

      <RadioGroup
        invalidMsg="Укажите пол"
        isRadioBtnSelected={selectedRadio}
        onSelectedRadio={handleSelectedRadio}
        title={"Пол"}
        data={["Мужской", "Женский"]}
      />
      <fieldset>
        <legend>Github</legend>
        <Input
          passValid={handleValidInputs}
          required={false}
          refInput={inputUrl}
          id="inputUrl"
          name="Вставьте ссылку на Github"
          type="url"
          invalidMsg="Проверьте правильность ссылки"
        />
      </fieldset>
      <Checkbox
        onChecked={handleCheckbox}
        textLabel="* Я согласен с политикой конфиденциальности"
      />
      {/*  */}
      <button type="button" onClick={checkForm}>
        test
      </button>

      <SendButton />
    </form>
  );
}

export default Form;
