"use client";

import Link from "next/link";
import styles from "./post.module.css";
import Image from "next/image";
import { extractContent } from "@/utils/textUtils";

type PostProps = {
  _id: string;
  title: string;
  descr: string;
  slug: string;
  catslug: string;
  createdat: string;
  img?: string;
};

export default function Post({
  _id,
  title,
  descr,
  slug,
  catslug,
  createdat,
  img,
}: PostProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={img || "/post.png"} alt="Post" fill />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.metadata}>
          <span className={styles.date}>{createdat.substring(0, 10)} - </span>
          <span className={styles.category}>{catslug}</span>
        </h3>
        <h1 className={styles.postTitle}>{title}</h1>
        <p className={styles.postDescription}>{extractContent(descr)}</p>
        <Link href={`/posts/${slug}`} className={styles.button}>
          Reade More
        </Link>
      </div>
    </div>
  );
}
