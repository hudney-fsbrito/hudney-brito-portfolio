import { NextResponse } from "next/server";

import JSONData from "./portfolio.json";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/portfolio`);
  let data = await res.json();

  if (!data) {
    data = JSONData;
  }

  return NextResponse.json({ data });
}