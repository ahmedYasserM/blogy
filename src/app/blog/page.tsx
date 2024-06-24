import CardList from "@/app/components/cardList/CardList";
import Menu from "@/app/components/menu/Menu";
import styles from "./blogPage.module.css";

type BlogPageProps = {
  searchParams: { page: string; cat: string };
};

export default function BlogPage({
  searchParams,
}: BlogPageProps): React.JSX.Element {
  const page: number = parseInt(searchParams.page || "1");
  const cat: string = searchParams.cat || "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}
