import { NextResponse } from "next/server";
import { pool } from "@/db/db";

export async function GET(): Promise<Response> {
  try {
    let categories = await pool.query("SELECT * FROM categories;");

    return new NextResponse(
      JSON.stringify({ categories: categories.rows, status: 200 }),
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 }),
    );
  }
}
