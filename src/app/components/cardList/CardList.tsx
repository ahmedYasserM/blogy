import { Pagination } from "@/app/components/pagination/Pagination";
import styles from "./cardList.module.css";
import Post from "@/app/components/post/Post";

export default function CardList(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      <Pagination />
    </div>
  );
}
