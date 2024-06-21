import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/app/components/menu/Menu";
import Comments from "@/app/[slug]/comments/Comments";

export default function SinglePage(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/culture.png" alt="Code" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <div className={styles.userInfoContainer}>
            <div className={styles.userImageContainer}>
              <Image src="/culture.png" alt="User image" fill />
            </div>
            <div className={styles.metadata}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>25 April 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.postContentContainer}>
          <div className={styles.description}>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ad veniam natus incidunt expedita possimus! Exercitationem esse
              aliquam doloremque nam dolores velit! Facere ab illum, illo
              dignissimos nisi exercitationem molestiae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ad veniam natus incidunt expedita possimus! Exercitationem esse
              aliquam doloremque nam dolores velit! Facere ab illum, illo
              dignissimos nisi exercitationem molestiae.
            </p>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ad veniam natus incidunt expedita possimus! Exercitationem esse
              aliquam doloremque nam dolores velit! Facere ab illum, illo
              dignissimos nisi exercitationem molestiae.
            </p>
          </div>

          <div className={styles.comments}>
            <Comments />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
}
