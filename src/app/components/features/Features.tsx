import Image from "next/image";
import styles from "./features.module.css";
import Post from "@/types/post";
import ClientButton from "./clientButton/ClientButton";
import { extractContent } from "@/utils/textUtils";

type PostWithUser = Post & {
  username: string;
  userimg: string;
};

async function getMostPopularPost() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/posts/popular", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch most popular post");
  }

  const data = await res.json();
  return data;
}

export default async function Features() {
  const { post }: { post: PostWithUser } = await getMostPopularPost();
  console.log("post => ", post);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Ahmed Yasser here!</b> Discover my stories and creative ideas.
      </h1>
      <section className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            src={post.img || "/culture.png"}
            alt="hero section image"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>
            {extractContent(post.descr).slice(0, 1000)}
          </p>
          <ClientButton slug={post.slug} />
        </div>
      </section>
    </div>
  );
}
