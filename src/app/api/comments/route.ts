import { NextResponse } from "next/server";
import { pool } from "@/db/db";
import { getAuthSession, Session } from "@/utils/auth";

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const postSlug: string = searchParams.get("postSlug")!;

  const queryString: string =
    "select _id, createdAt, descr, name AS username, image AS userImg from comments inner join users on comments.useremail = users.email where comments.postSlug = $1;";

  try {
    const comments = await pool.query(queryString, [postSlug]);

    return new NextResponse(
      JSON.stringify({
        comments: comments.rows,
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

export async function POST(req: Request): Promise<Response> {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!", status: 401 }),
    );
  }

  try {
    const { desc, postSlug } = await req.json();

    const queryString: string =
      "insert into comments (descr, postSlug, userEmail) values ($1, $2, $3);";
    const values: string[] = [desc, postSlug, session.user!.email];

    const result = await pool.query(queryString, values);

    return new NextResponse(
      JSON.stringify({ message: "Comment added", status: 200 }),
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 }),
    );
  }
}
