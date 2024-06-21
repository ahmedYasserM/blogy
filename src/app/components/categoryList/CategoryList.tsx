import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

type CategoryType = {
  name: string;
  image: string;
  color: string;
};

export default function CategoryList(): React.JSX.Element {
  const categories: CategoryType[] = [
    {
      name: "Style",
      image: "/style.png",
      color: "#CEDFE7",
    },
    {
      name: "Fashion",
      image: "/fashion.png",
      color: "#E7D3DE",
    },
    {
      name: "Food",
      image: "/food.png",
      color: "#e0ebca",
    },
    {
      name: "Travel",
      image: "/travel.png",
      color: "#E7CFC6",
    },
    {
      name: "Culture",
      image: "/culture.png",
      color: "#f2e0c9",
    },
    {
      name: "Coding",
      image: "/coding.png",
      color: "#CECBE7",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <Link
            href={`/blog?cat=${category.name.toLowerCase()}`}
            key={index}
            className={styles.category}
            style={{ backgroundColor: category.color }}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={40}
              height={40}
            />
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
