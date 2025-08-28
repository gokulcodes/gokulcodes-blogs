import { NextResponse } from "next/server";

// Handle GET requests to /api/users
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Fetch data from a database or other source
  // const users = [
  //   { id: 1, name: "Alice" },
  //   { id: 2, name: "Bob" },
  // ];
  // const url = request.;
  // const queryParams = url.split("?")[1];
  // const params = new URLSearchParams(request.url);
  // const id = params.get("id");
  // console.log(params);
  const awaitedParams = await params;
  return NextResponse.json({ id: awaitedParams.id });
}
