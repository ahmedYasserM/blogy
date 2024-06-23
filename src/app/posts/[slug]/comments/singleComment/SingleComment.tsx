import styles from "./singleComment.module.css";
import Image from "next/image";

type SingleCommentProps = {
  username: string;
  date: string;
  description: string;
  image: string;
};

export default function SingleComment({
  username,
  date,
  description,
  image,
}: SingleCommentProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userImageContainer}>
          <Image src={image} alt="User image" fill />
        </div>
        <div className={styles.metadata}>
          <span>{username}</span>
          <span className={styles.date}>{date.slice(0, 10)}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
}
