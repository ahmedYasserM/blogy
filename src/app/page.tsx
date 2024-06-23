import styles from "./page.module.css";
import Features from "./components/features/Features";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const page: number = parseInt(searchParams?.page || "1");
  return (
    <div className={styles.container}>
      <Features />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
