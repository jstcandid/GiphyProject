import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../redux/actions/authActions";
import { IState } from "../../redux/store";

import { Button } from "../Button/Button";
import styles from "./NavBar.module.css";

interface IProps {
  closeNavbar: () => void;
}

export function NavBar({ closeNavbar }: IProps) {
  const { isLoggedIn, email } = useSelector(
    (state: IState) => state.authReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const getUsername = (email: string) => {
    return email.substring(0, email.indexOf("@"));
  };

  return (
    <>
      {isLoggedIn ? (
        <nav className={styles.container}>
          <div className={styles.navbar}>
            <p className={styles.navbar_now}>Now:</p>
            <div className={styles.navbar_profile}>
              <Button
                text={email.charAt(0).toUpperCase()}
                onClick={() => {}}
                className={styles.navbar_profile_button}
              />
              <div className={styles.navbar_profile_info}>
                <p className={styles.navbar_username}>{getUsername}</p>
                <p className={styles.text}>Personal:</p>
                <p className={styles.text}>{email}</p>
              </div>
            </div>

            <div
              onClick={() => {
                dispatch(signOut());
                if (typeof localStorage["currentUser"] == "undefined") {
                  history.push("/");
                }
              }}
              className={styles.navbar_item}
            >
              <p className={styles.navbar_text_items}>Sign Out</p>
            </div>

            <Link to={"/saved"}>
              <div className={styles.navbar_item}>
                <p className={styles.navbar_text_items}>Saved posts</p>
              </div>
            </Link>
          </div>
          <div className={styles.container_back}></div>
        </nav>
      ) : null}
      <div
        onClick={closeNavbar}
        style={{
          width: "100vw",
          height: "1000vw",
          position: "absolute",
          left: 0,
          top: 0,
          background: "transparent",
          zIndex: 100,
        }}
      />
    </>
  );
}
