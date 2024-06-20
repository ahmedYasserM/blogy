import Link from "next/link";
import styles from "./comments.module.css";
import SingleComment from "@/app/[slug]/comments/singleComment/SingleComment";

export default function Comment(): React.JSX.Element {
  const authStatus: string = "notauthenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.titile}>Comments</h1>
      {authStatus === "authenticated" ? (
        <>
          <div className={styles.inputContainer}>
            <textarea
              className={styles.textarea}
              placeholder="Write your comment here"
            />
            <button className={styles.button}>Send</button>
          </div>

          <div className={styles.commentsList}>
            <SingleComment
              username="John Doe"
              date="25 April 2023"
              image="/culture.png"
              description="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            />
            <SingleComment
              username="John Doe"
              date="25 April 2023"
              image="/culture.png"
              description="Lorem ipsum dolor sit amet,Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            />
            <SingleComment
              username="John Doe"
              date="25 April 2023"
              image="/culture.png"
              description="Lorem ipsum dolor sit amet,Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
            />
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
