import styles from "./menu.module.css";
import MenuCard from "@/app/components/menu/menuCard/MenuCard";
import Link from "next/link";

export const categoryColors: { [key: string]: string } = {
  style: "#CEDFE7",
  food: "#e0ebca",
  travel: "#E7CFC6",
  culture: "#f2e0c9",
  coding: "#CECBE7",
  fashion: "#E7D3DE",
};

export default function Menu(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <section className={styles.cardsContainer}>
        <div>
          <span className={styles.subTitle}>What&apos;s hot</span>
          <h2 className={styles.mainTitle}>Most Popular</h2>
        </div>
        <MenuCard
          category="travel"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="john doe"
          date="01.04.2022"
        />

        <MenuCard
          category="culture"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="kate smith"
          date="08.06.2023"
        />

        <MenuCard
          category="coding"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="larry page"
          date="12.12.2024"
        />

        <MenuCard
          category="fashion"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="robert smith"
          date="01.01.2021"
        />
      </section>
      <section className={styles.categoriesContainer}>
        <div>
          <span className={styles.subTitle}>Discover by topic</span>
          <h2 className={styles.mainTitle}>Categories</h2>
        </div>
        <div className={styles.categories}>
          {Object.keys(categoryColors).map((category, index) => (
            <Link
              href={`/blog?cat=${category.toLowerCase()}`}
              key={index}
              className={styles.category}
              style={{ backgroundColor: categoryColors[category] }}
            >
              <p>{category}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.cardsContainer}>
        <div>
          <span className={styles.subTitle}>Chosen by the editor</span>
          <h2 className={styles.mainTitle}>Editors Pick</h2>
        </div>
        <MenuCard
          category="coding"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="larry page"
          date="12.12.2024"
          image="/writing.png"
        />

        <MenuCard
          category="food"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="larry page"
          date="12.12.2024"
          image="/writing.png"
        />

        <MenuCard
          category="fashion"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          author="larry page"
          date="12.12.2024"
          image="/writing.png"
        />
      </section>
    </div>
  );
}
