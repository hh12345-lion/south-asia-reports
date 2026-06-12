import { NextResponse } from "next/server";
import { parseGhlPayload, submitToGhl } from "@/lib/ghl-webhook";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const payload = parseGhlPayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  if (!payload.name?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const result = await submitToGhl(payload);
  if (!result.ok) {
    const status = result.error?.includes("not configured") ? 503 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true });
}
