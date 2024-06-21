"use client";

import styles from "./loginPage.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function LoginPage(): React.JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Image src="/post.png" alt="login" fill />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Login</h1>
          <button className={styles.button}>
            <Image src="/google.png" alt="google" width={30} height={30} />
            <span className={styles.loginText}>Sign in with Google</span>
          </button>
          <button className={styles.button}>
            <Image
              src={
                theme.theme === "light" ? "/githubDark.png" : "/githubLight.png"
              }
              alt="github"
              width={30}
              height={30}
            />
            <span className={styles.loginText}>Sign in with Github</span>
          </button>
          <button className={styles.button}>
            <Image src="/facebook.png" alt="facebook" width={30} height={30} />
            <span className={styles.loginText}>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
