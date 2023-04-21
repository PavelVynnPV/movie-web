import React, { useEffect, useState } from "react";
import styles from "./SignForm.module.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const clientId =
  "1027374739884-cm03ejrrnb4an15ol2ldu6c6rk3srl9q.apps.googleusercontent.com";

export default function Login({ activeLogin, clients }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [emailError, setEmailError] = useState(
    "*Email не повинен бути порожнім"
  );
  const [passwordError, setPasswordError] = useState(
    "*Пароль не повинен бути порожнім"
  );
  const [clientData, setClientData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  ////VALIDATION////
  useEffect(() => {
    setIsAuthenticated(false);
    if (emailError === " " || passwordError === " ") {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

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

  const responseFacebook = (res) => {
    localStorage.setItem("activeClient", JSON.stringify(res));
  };

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Curent user: ", res.profileObj);
    localStorage.setItem("activeClient", JSON.stringify(res.profileObj));
    setIsAuthenticated(true);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };
  console.log(isAuthenticated);
  //////

  const clientDataWriter = (e) => {
    const newClientData = { ...clientData };
    newClientData[e.target.id] = e.target.value;
    setClientData(newClientData);
  };

  const handleOnClickLogin = (item) => {
    const allClients = JSON.parse(localStorage.getItem("client"));

    allClients.some((client) => {
      if (client.email === item.email && client.password === item.password) {
        localStorage.setItem("activeClient", JSON.stringify(client));
      } else {
        alert("Перевірте чи вірно ви ввели пароль або email");
      }
      return client;
    });
  };

  return (
    <>
      <form className={activeLogin === true ? styles.active : styles.unActive}>
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
          />
          {passwordDirty && passwordError && (
            <div className={styles.red_error}>{passwordError}</div>
          )}
        </div>
        <h1 className={styles.apis_login_title}>Увійти за допомогою:</h1>
        <div className={styles.sign_btns}>
          <div
            className={styles.signInButton}
            onClick={() =>
              setTimeout(() => {
                window.location.reload();
              }, 7000)
            }
          >
            <GoogleLogin
              clientId={clientId}
              buttonText="login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
          <div className={styles.signInButton_facebook}   onClick={() =>
              setTimeout(() => {
                window.location.reload();
              }, 7000)
            }>
            <FacebookLogin
              appId="1270803790449029"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </div>
        </div>
        <button
          disabled={formValid}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            emailInput.value = "";
            passwordInput.value = "";
            handleOnClickLogin(clientData);
          }}
          className={
            !formValid ? styles.submit_btn : styles.submit_btn_without_hover
          }
        >
          Увійти
        </button>
      </form>
    </>
  );
}
