import { Pagination } from "@/app/components/pagination/Pagination";
import styles from "./cardList.module.css";
import PostComponent from "@/app/components/post/Post";
import Post from "@/types/post";

type CardListProps = {
  page: number;
  cat?: string;
};

async function getPosts(page: number, cat?: string) {
  const res = await fetch(
    process.env.NEXTAUTH_URL + `/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
}

export default async function CardList({ page, cat }: CardListProps) {
  const { posts, postCount } = await getPosts(page, cat);

  const POSTS_PER_PAGE: number = 4;

  const hasNext: boolean = POSTS_PER_PAGE * page < postCount;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((post: Post) => {
          return (
            <PostComponent
              slug={post.slug}
              key={post._id}
              _id={post._id}
              img={post.img || "/post.png"}
              createdat={post.createdat}
              catslug={post.catslug}
              title={post.title}
              descr={post.descr}
            />
          );
        })}
      </div>

      <Pagination page={page} hasPrev={page > 1} hasNext={hasNext} />
    </div>
  );
}
