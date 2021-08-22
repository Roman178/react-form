import React, { useState, useEffect, useRef } from "react";
import Input from "../Input/Input";
import FileInput from "../FileInput/FileInput";
import RadioGroup from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";
import SendButton from "../SendButton/SendButton";
import Popup from "../Popup/Popup";
import styles from "./Form.module.scss";

function Form(props) {
  // Рефы нужны для вызова focus() у инпутов.
  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputUrl = useRef();
  const refsInputsArr = [inputName, inputLastName, inputEmail, inputUrl];

  const [validationsInputs, setValidationsInputs] = useState({});
  const [selectedRadio, setRadio] = useState("init");
  const [checkedBox, setCheckBox] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [candidateName, setCandidateName] = useState("");

  useEffect(() => {
    setValidForm(
      Object.keys(validationsInputs).length > 3 &&
        !Object.values(validationsInputs).includes(false) &&
        selectedRadio !== "init" &&
        !!selectedRadio &&
        checkedBox
    );
  }, [validationsInputs, selectedRadio, checkedBox]);

  function checkForm() {
    if (validForm) {
      setFormSent(true);
    } else {
      refsInputsArr.forEach((i) => i.current.focus());
      if (selectedRadio === "init") setRadio("");
    }
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

  function saveName(name) {
    setCandidateName(name);
  }

  return (
    <form
      onSubmit={(evt) => evt.preventDefault()}
      noValidate
      className={styles["form"]}
    >
      <h1 className={styles["title"]}>Анкета соискателя</h1>
      <fieldset className={styles["fieldset"]}>
        <legend className={styles["fieldset-title"]}>Личные данные</legend>
        <Input
          required={true}
          refInput={inputName}
          id="inputName"
          passValid={handleValidInputs}
          passName={saveName}
          name="Имя"
          type="text"
          invalidMsg="В имени могут быть только буквы"
          pattern="^[a-zA-Zа-яёА-ЯЁ]+$"
          formSent={formSent}
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
          formSent={formSent}
        />
        <Input
          required={true}
          refInput={inputEmail}
          passValid={handleValidInputs}
          id="inputEmail"
          name="Электронная почта"
          type="email"
          invalidMsg="Пожалуйста, укажите электронную почту"
          formSent={formSent}
        />
        <FileInput formSent={formSent} />
      </fieldset>

      <RadioGroup
        invalidMsg="Укажите пол"
        isRadioBtnSelected={selectedRadio}
        onSelectedRadio={handleSelectedRadio}
        title={"Пол"}
        data={["Мужской", "Женский"]}
        formSent={formSent}
      />
      <fieldset className={styles["fieldset"]}>
        <legend>Github</legend>
        <Input
          passValid={handleValidInputs}
          required={false}
          refInput={inputUrl}
          id="inputUrl"
          name="Вставьте ссылку на Github"
          type="url"
          invalidMsg="Проверьте правильность ссылки"
          formSent={formSent}
        />
      </fieldset>
      <Checkbox onChecked={handleCheckbox} formSent={formSent} />

      <SendButton formIsValid={validForm} onClick={checkForm} />

      <Popup
        candidateName={candidateName}
        formSent={formSent}
        setInitialForm={() => setFormSent(false)}
      />
    </form>
  );
}

export default Form;
