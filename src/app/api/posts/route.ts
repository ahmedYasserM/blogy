import { NextResponse } from "next/server";
import { pool } from "@/db/db";

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const page: number = parseInt(searchParams.get("page")!);
  const cat: string = searchParams.get("cat")!;

  const limit: number = 4; // number of posts we want to fetch

  const offset: number = (page - 1) * limit; // number of posts we need to skip

  let query: string =
    cat === ""
      ? `SELECT * FROM posts LIMIT ${limit} OFFSET ${offset}; select * from posts;`
      : `SELECT * FROM posts WHERE catslug = '${cat}' LIMIT ${limit} OFFSET ${offset}; select * from posts where catslug = '${cat}';`;

  try {
    let [pagePosts, allPosts] = await pool.query(query);

    return new NextResponse(
      JSON.stringify({
        posts: pagePosts.rows,
        postCount: allPosts.rows.length,
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
