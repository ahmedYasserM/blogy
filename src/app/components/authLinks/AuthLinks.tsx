"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks(): React.JSX.Element {
  const { status } = useSession();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {status !== "authenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setIsOpened(!isOpened)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isOpened && (
        <div className={styles.responsiveLinksContainer}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status !== "authenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={() => signOut()}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
