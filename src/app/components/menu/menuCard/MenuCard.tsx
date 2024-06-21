import Image from "next/image";
import styles from "./menuCard.module.css";
import { categoryColors } from "@/app/components/menu/Menu";

type PopularCardProps = {
  category: string;
  content: string;
  author: string;
  date: string;
  image?: string;
};

export default function MenuCard({
  category,
  content,
  author,
  date,
  image,
}: PopularCardProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <Image src={image} alt={category + " image"} fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div
          className={styles.patch}
          style={{ backgroundColor: categoryColors[category] }}
        >
          {category}
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.metadata}>
          <span className={styles.author}>{author} - </span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
}
