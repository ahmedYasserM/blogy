"use client";

import styles from "./pagination.module.css";
import { useRouter, usePathname } from "next/navigation";

type PaginationProps = {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export function Pagination({ page, hasNext, hasPrev }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  let rootPath = "/";

  if (pathname.match("//blog(/|$)/;")) {
    rootPath = "/blog";
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`${rootPath}?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`${rootPath}?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
