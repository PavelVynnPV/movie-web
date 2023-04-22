import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../SignForm";
import { SignUp } from "../SignForm";
import styles from "./Navbar.module.css";
import { gapi } from "gapi-script";
import profile_img from "../utils/img/client_profile.svg";
import LogOut from "../SignForm/LogOut";

const clientId =
  "1027374739884-cm03ejrrnb4an15ol2ldu6c6rk3srl9q.apps.googleusercontent.com";

export default function Navbar({
  setSearch,
  webHref,
  itemInfo,
  setWebHref,
  handleOnClickAddClient,
  clients,
  activeLogin,
  activeSignUp,
  setActiveLogin,
  setActiveSignUp,
  activeClient,
  setActiveClient,
}) {
  const [activeClientMenu, setActiveClientMenu] = useState(false);
  const body = document.querySelector('body')
  if(activeClientMenu){
    body.style.overflow = "hidden"
  }else body.style.overflow = "auto"
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
    const storedClient = JSON.parse(localStorage.getItem("activeClient"));
    if (storedClient) {
      setActiveClient(storedClient);
    }
    
  }, [setActiveClient]);

  const activeModalChangerLogin = () => {
    if (activeLogin === false) {
      setActiveSignUp(false);
      setActiveLogin(true);
    }
  };
  const activeModalChangerSignUp = () => {
    if (activeSignUp === false) {
      setActiveLogin(false);
      setActiveSignUp(true);
    }
  };

  const activeMenuChek = () => {
    if (activeClientMenu === false) {
      setActiveClientMenu(true);
    } else setActiveClientMenu(false);
  };

  const activeClientCheck = Object.keys(activeClient).length === 0;
  return (
    <nav>
      <div className={styles.nav__inner}>
        <div className={styles.nav__inner_top}>
          <Link
            to="/movie-web"
            onClick={() => setWebHref("https://pavelvynnpv.github.io/movie-web")}
            className={styles.nav__logo}
          ></Link>
          <div className={styles.nav__sign_btns}>
            {!activeClientCheck ? (
              <div className={styles.menu__inner}>
                <span
                  className={styles.client__profile_image}
                  onClick={() => activeMenuChek()}
                ></span>
                <div
                  className={
                    activeClientMenu
                      ? styles.client__menu_active
                      : styles.unActive
                  }
                >
                  <div className={styles.client__menu_container}>

                    <span className={styles.client__menu_logo}></span>
                    <img
                      className={styles.client__menu_img}
                      src={profile_img}
                      alt=""
                    />
                    <h1 className={styles.client__menu_name}>
                      {activeClient.name}
                    </h1>
                    <ul className={styles.client__menu_list}>
                      <li className={styles.menu__list_item}>
                        <span className={styles.menu__list_item_icon}></span>Мій
                        профіль
                      </li>
                      <li className={styles.menu__list_item}>
                        <span className={styles.menu__list_item_icon}></span>
                        Налаштування
                      </li>
                      <li
                        className={styles.menu__list_item}
                        onClick={() => {
                          setActiveClient({});
                          localStorage.removeItem("activeClient");
                        }}
                      >
                        <LogOut setActiveClientMenu={setActiveClientMenu}/>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {" "}
                <span
                  className={styles.nav__signIn}
                  onClick={() => activeModalChangerLogin()}
                >
                  Вхід<span className={styles.sign__underline}></span>
                </span>
                <span className={styles.sign_crossLine}>|</span>
                <span
                  className={styles.nav__signUp}
                  onClick={() => activeModalChangerSignUp()}
                >
                  Реєстрація<span className={styles.sign__underline}></span>
                </span>
              </>
            )}
          </div>
        </div>

        <div
          className={
            webHref === `http://pavelvynnpv.github.io/movie-web/singlepage/${itemInfo.id}`
              ? styles.unActive
              : styles.nav__inner_search_box
          }
        >
          <input
            type="search"
            placeholder="Пошук"
            className={styles.nav__inner_search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className={styles.search_icon}></span>
        </div>
      </div>

      <section
        className={
          activeLogin === true || activeSignUp === true
            ? styles.sign_form
            : styles.unActive
        }
      >
        <div
          className={styles.background_dark}
          onClick={() => {
            setActiveLogin(false);
            setActiveSignUp(false);
          }}
        ></div>
        <div className={styles.sign_form__inner}>
          <span
            onClick={() => {
              setActiveLogin(false);
              setActiveSignUp(false);
            }}
            className={styles.modal_close_icon}
          ></span>
          <h1 className={styles.logog__modal}>{""}</h1>
          <Login
            clients={clients}
            activeLogin={activeLogin}
            setActiveClient={setActiveClient}
          />
          <SignUp
            activeSignUp={activeSignUp}
            setActiveSignUp={setActiveSignUp}
            handleOnClickAddClient={handleOnClickAddClient}
            clients={clients}
          />
        </div>
      </section>
    </nav>
  );
}
