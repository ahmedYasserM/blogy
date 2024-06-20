import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import AuthLinks from "@/app/components/authLinks/AuthLinks";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Link
          href="https://www.facebook.com/profile.php?id=100048702383958"
          target="_blank"
        >
          <Image
            src="/facebook.png"
            alt="facebook logo"
            width={24}
            height={24}
          ></Image>
        </Link>
        <Link href="https://t.me/aYasserM" target="_blank">
          <Image
            src="/telegram.png"
            alt="telegram logo"
            width={24}
            height={24}
          ></Image>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ahmed-yasser-bb4006226/recent-activity/all/"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin logo"
            width={24}
            height={24}
          ></Image>
        </Link>
      </div>

      <div className={styles.logo}>blogy</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.navLink} href="/">
          Home
        </Link>
        <Link className={styles.navLink} href="/about">
          About
        </Link>
        <Link className={styles.navLink} href="/contact">
          Contact
        </Link>
        <AuthLinks />
      </div>
    </nav>
  );
}
