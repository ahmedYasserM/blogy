import Link from "next/link";
import styles from "./navbar.module.css";
import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import AuthLinks from "@/app/components/authLinks/AuthLinks";
import SocialLinks from "../socialLinks/SocialLinks";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className={styles.container}>
      <SocialLinks />

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
