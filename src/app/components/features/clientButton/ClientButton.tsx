"use client";

import { useRouter } from "next/navigation";
import styles from "./clientButton.module.css";

type ClientButtonProps = {
  slug: string;
};

export default function ClientButton({
  slug,
}: ClientButtonProps): React.JSX.Element {
  const router = useRouter();
  return (
    <button
      className={styles.postButton}
      onClick={() => router.push(`/posts/${slug}`)}
    >
      Reade More
    </button>
  );
}
