import CardList from "@/app/components/cardList/CardList";
import Menu from "@/app/components/menu/Menu";
import styles from "./blogPage.module.css";

export default function Blog(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
