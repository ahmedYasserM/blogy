"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import SingleComment from "@/app/posts/[slug]/comments/singleComment/SingleComment";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Comment from "@/types/comment";
import { useState } from "react";

type CommentProps = {
  postSlug: string;
};

type CommentWithUser = Comment & {
  username: string;
  userimg: string;
};

async function fetcher(url: string) {
  const res = await fetch(url, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data = await res.json();
  return data;
}

export default function Comments({
  postSlug,
}: CommentProps): React.JSX.Element {
  const { status } = useSession();
  const { data, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const [desc, setDesc] = useState("");
  const handleSend = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postSlug: postSlug, desc: desc }),
    });

    if (res.ok) {
      mutate();
    }

    setDesc(() => "");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titile}>Comments</h1>
      {status === "authenticated" ? (
        <>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.textarea}
              placeholder="Write your comment here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={handleSend}>
              Send
            </button>
          </div>

          <div className={styles.commentsList}>
            {isLoading ? (
              <p>Loading comments...</p>
            ) : (
              data.comments.map((comment: CommentWithUser) => {
                return (
                  <SingleComment
                    key={comment._id}
                    username={comment.username}
                    date={comment.createdat}
                    description={comment.descr}
                    image={comment.userimg}
                  />
                );
              })
            )}
          </div>
        </>
      ) : (
        <p>
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
          to write a comment
        </p>
      )}
    </div>
  );
}
