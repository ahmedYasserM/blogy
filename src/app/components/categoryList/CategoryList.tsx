import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

type CategoryType = {
  _id: string;
  slug: string;
  title: string;
  color: string;
  img: string;
};

async function getCategories() {
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  return data;
}

export default async function CategoryList() {
  const data = await getCategories();
  const categories: CategoryType[] = data.categories;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href={`/blog?cat=${category.slug.toLowerCase()}`}
            key={category._id}
            className={styles.category}
            style={{ backgroundColor: category.color }}
          >
            <Image
              src={category.img}
              alt={category.slug}
              width={40}
              height={40}
            />
            <p>{category.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
