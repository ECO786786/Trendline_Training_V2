
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Type validation
    if (!['general', 'corporate'].includes(body.type)) {
         return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        type: body.type, // 'general' or 'corporate'
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        company: body.company,
        subject: body.subject,
        message: body.message,
        serviceName: body.serviceName,
        servicePrice: body.servicePrice
      },
    });

    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create inquiry" },
      { status: 500 }
    );
  }
}
