import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    // Support both env vars for compatibility
    const correctPassword =
      process.env.LEADS_DASHBOARD_PASSWORD ||
      process.env.NEXT_PUBLIC_LEADS_DASHBOARD_PASSWORD ||
      "admin123";

    if (password === correctPassword) {
      // Use password as token for API calls (in production, use JWT)
      return NextResponse.json({
        success: true,
        token: password, // Use password as token for API calls
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}
