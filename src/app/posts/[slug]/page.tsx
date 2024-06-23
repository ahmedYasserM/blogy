import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/app/components/menu/Menu";
import Comments from "@/app/posts/[slug]/comments/Comments";
import Post from "@/types/post";

type Params = {
  slug: string;
};

type PostWithUser = Post & {
  username: string;
  userimg: string;
};

async function getPost(slug: string) {
  const res = await fetch(process.env.NEXTAUTH_URL + `/api/posts/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post with id: " + slug);
  }

  const data = await res.json();

  return data;
}

export default async function SinglePage({ params }: { params: Params }) {
  console.log(`my post slug >`, params.slug);
  const { post }: { post: PostWithUser } = await getPost(params.slug);
  console.log("post => ", post);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={post.img || "/post.png"} alt="Code" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.userInfoContainer}>
            <div className={styles.userImageContainer}>
              <Image
                src={post.userimg || "/avatar.png"}
                alt="User image"
                fill
              />
            </div>
            <div className={styles.metadata}>
              <span className={styles.username}>{post.username}</span>
              <span className={styles.date}>{post.createdat.slice(0, 10)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.postContentContainer}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.descr }}
          />

          <div className={styles.comments}>
            <Comments postSlug={post.slug} />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
}
