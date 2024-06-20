import Link from "next/link";
import styles from "./post.module.css";
import Image from "next/image";

export default function Post(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/post.png" alt="Post" fill />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.metadata}>
          <span className={styles.timeDate}>11.02.2024 - </span>
          <span className={styles.category}>culture</span>
        </h3>
        <h1 className={styles.postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <p className={styles.postDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima
          odit beatae, doloribus facere laboriosam commodi rerum deleniti
          impedit enim quam debitis mollitia corporis. Possimus, laboriosam.
          Voluptas porro adipisci facilis?
        </p>
        <Link href="/" className={styles.button}>
          Reade More
        </Link>
      </div>
    </div>
  );
}
