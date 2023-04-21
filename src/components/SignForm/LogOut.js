import React from "react";
import styles from "./SignForm.module.css";
import { GoogleLogout } from "react-google-login";

const clientId =
  "1027374739884-cm03ejrrnb4an15ol2ldu6c6rk3srl9q.apps.googleusercontent.com";

export default function LogOut({ activeLogin, setActiveClientMenu }) {
  const onSuccess = () => {
    console.log("log out successfull!");
  };
  return (
    <div className={styles.logOutBtn} onClick={() => setActiveClientMenu(false)}>
      <span className={styles.menu__list_item_icon}></span>

      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
