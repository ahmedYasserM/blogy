import Image from "next/image";
import styles from "./footer.module.css";
import SocialLinks from "../socialLinks/SocialLinks";
import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logo}>Blogy</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          odio eget magna malesuada, vel luctus ligula tincidunt. Donec auctor
          odio eget magna malesuada, vel luctus ligula tincidunt.
        </p>
        <SocialLinks />
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <h1 className={styles.linkHeader}>Links</h1>
          <Link href="/">HomePage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <h1 className={styles.linkHeader}>Tags</h1>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <h1 className={styles.linkHeader}>Social</h1>
          <Link href="/">Facebok</Link>
          <Link href="/">Telegram</Link>
          <Link href="/">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
