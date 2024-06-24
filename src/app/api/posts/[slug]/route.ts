import { NextResponse } from "next/server";
import { pool } from "@/db/db";

type Params = {
  slug: string;
};

export async function GET(
  req: Request,
  { params }: { params: Params },
): Promise<Response> {
  const queryString: string =
    "SELECT _id, createdAt, slug, title, img, descr, views, catSlug, name AS username, image AS userImg FROM posts INNER JOIN users ON posts.useremail = users.email WHERE posts.slug = $1;";
  const updateViewsQueryString: string =
    "UPDATE posts SET views = views + 1 WHERE slug = $1;";

  try {
    let result = await pool.query(queryString, [params.slug]);
    pool.query(updateViewsQueryString, [params.slug]);

    return new NextResponse(
      JSON.stringify({
        post: result.rows[0],
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
