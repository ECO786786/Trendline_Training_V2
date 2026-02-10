import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { seed } from "../../../prisma/seed";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  if (secret !== "trendline_admin_seed") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await seed(prisma);
    return NextResponse.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed database", details: String(error) },
      { status: 500 }
    );
  }
}
