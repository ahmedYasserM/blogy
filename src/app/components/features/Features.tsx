import Image from "next/image";
import styles from "./features.module.css";

export default function Features(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ahmed Yasser here!</b> Discover my stories and creative ideas.
      </h1>
      <section className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/culture.png" alt="hero section image" fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            dolore quis nostrum veniam atque accusantium, repellat impedit vitae
            iste ex voluptatem! Ullam repudiandae eum ab modi cupiditate
            inventore, quidem error?
          </p>
          <button className={styles.postButton}>Reade More</button>
        </div>
      </section>
    </div>
  );
}
