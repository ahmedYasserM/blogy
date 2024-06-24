import { NextResponse } from "next/server";
import { pool } from "@/db/db";

export async function GET(req: Request): Promise<Response> {
  let queryString: string =
    "SELECT _id, createdAt, slug, title, img, descr, views, catSlug, name AS username, image AS userImg FROM posts INNER JOIN users ON posts.useremail = users.email ORDER BY views DESC LIMIT 1;";

  try {
    let mostPopularPost = await pool.query(queryString);

    return new NextResponse(
      JSON.stringify({
        post: mostPopularPost.rows[0],
        status: 200,
      }),
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 }),
    );
  }
}
