import { NextResponse } from "next/server";
import { pool } from "@/db/db";

type Params = {
  slug: string;
};

export async function GET(
  req: Request,
  { params }: { params: Params },
): Promise<Response> {
  console.log(`from router post slug >`, params.slug);
  const queryString: string =
    "select _id, createdAt, slug, title, img, descr, views, catSlug, name AS username, image AS userImg from posts inner join users on posts.useremail = users.email where posts.slug = $1;";

  try {
    let result = await pool.query(queryString, [params.slug]);

    console.log(`the result ==> `, result.rows[0]);

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
