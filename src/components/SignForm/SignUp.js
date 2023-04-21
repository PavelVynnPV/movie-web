import React, { useState, useEffect } from "react";
import styles from "./SignForm.module.css";

export default function SignUp({
  activeSignUp,
  handleOnClickAddClient,
  setActiveSignUp,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState(
    "*Email не повинен бути порожнім"
  );
  const [passwordError, setPasswordError] = useState(
    "*Пароль не повинен бути порожнім"
  );
  const [nameError, setNameError] = useState("Ім'я не повинне бути порожнім");
  const [clientData, setClientData] = useState([]);

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  ////VALIDATION////
  useEffect(() => {
    if (emailError === " " && passwordError === " " && nameError === " ") {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, nameError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("*Невірно введений email");
    } else {
      setEmailError(" ");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("*Пароль повинен містити не менше 6 символів");
      if (!e.target.value) {
        setPasswordError("*Пароль не повинен бути порожнім");
      }
    } else {
      setPasswordError(" ");
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 5) {
      setNameError("*Ім'я повинно бути не менше 5 символів");
      if (!e.target.value) {
        setNameError("*Ім'я не повинне бути порожнім");
      }
    } else {
      setNameError(" ");
    }
  };

  //////

  const clientDataWriter = (e) => {
    const newClientData = { ...clientData };
    newClientData[e.target.id] = e.target.value;
    setClientData(newClientData);
  };

  return (
    <>
      <form className={activeSignUp === true ? styles.active : styles.unActive}>
        <div className={styles.relative_for_error}>
          <label for="name">Ім'я користувача</label>
          <input
            onChange={(e) => {
              nameHandler(e);
              clientDataWriter(e);
            }}
            onBlur={(e) => setNameDirty(true)}
            type="name"
            placeholder="Введіть ім'я"
            name={clientData.name}
            id="name"
            required
          />
          {nameDirty && nameError && (
            <div className={styles.red_error}>{nameError}</div>
          )}
        </div>
        <div className={styles.relative_for_error}>
          <label for="email">Email користувача</label>
          <input
            onChange={(e) => {
              emailHandler(e);
              clientDataWriter(e);
            }}
            onBlur={(e) => setEmailDirty(true)}
            type="email"
            placeholder="youremail@smth.com"
            name={clientData.email}
            id="email"
            required
          />
          {emailDirty && emailError && (
            <div className={styles.red_error}>{emailError}</div>
          )}
        </div>
        <div className={styles.relative_for_error}>
          <label for="password">Пароль користувача</label>
          <input
            onChange={(e) => {
              passwordHandler(e);
              clientDataWriter(e);
            }}
            onBlur={(e) => setPasswordDirty(true)}
            type="password"
            placeholder="Введіть пароль"
            name={clientData.password}
            id="password"
            required
          />
          {passwordDirty && passwordError && (
            <div className={styles.red_error}>{passwordError}</div>
          )}
        </div>
        <button
          disabled={formValid}
          type="submit"
          onClick={() => {
            handleOnClickAddClient(clientData);
            emailInput.value = "";
            passwordInput.value = "";
            setActiveSignUp(false);
          }}
          className={
            !formValid ? styles.submit_btn : styles.submit_btn_without_hover
          }
        >
          Зареєструватися
        </button>
      </form>
    </>
  );
}
