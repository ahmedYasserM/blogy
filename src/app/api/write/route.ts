import { pool } from "@/db/db";
import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  console.log("POST /api/write");
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Auhenticated", status: 401 }),
    );
  }

  try {
    const body = await req.json();

    const queryString: string = `INSERT INTO posts (title, descr, slug, useremail, catslug, img) VALUES ($1, $2, $3, $4, $5, $6)`;
    const values = [
      body.title,
      body.descr,
      body.slug,
      session.user!.email,
      body.catslug,
      body.img,
    ];

    const res = await pool.query(queryString, values);
    return new NextResponse(
      JSON.stringify({ message: "Post written", status: "200" }),
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Error while writing post", status: "500" }),
    );
  }
}
