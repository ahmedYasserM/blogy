"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle(): React.JSX.Element {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      style={
        theme.theme === "dark"
          ? { backgroundColor: "#eff3e7" }
          : { backgroundColor: "#202e33" }
      }
    >
      <Image src="/sun.png" alt="Sun" width={14} height={14} />
      <div
        className={styles.circle}
        onClick={theme.toggleTheme}
        style={
          theme.theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "#fff" }
        }
      ></div>
      <Image src="/moon.png" alt="Moon" width={14} height={14} />
    </div>
  );
}
