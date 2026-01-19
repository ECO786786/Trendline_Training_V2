
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

import { corporateInquirySchema, contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Type validation
    if (!['general', 'corporate'].includes(body.type)) {
         return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
    }

    let validationResult;
    if (body.type === 'corporate') {
        validationResult = corporateInquirySchema.safeParse({ ...body, terms: true });
    } else {
        validationResult = contactSchema.safeParse({ ...body, terms: true });
    }

    if (!validationResult.success) {
        return NextResponse.json({ error: validationResult.error.flatten() }, { status: 400 });
    }

    // Extract common and specific fields safely based on type
    const { fullName, email, phone, company, message } = validationResult.data as any;
    let subject = undefined;
    let serviceName = undefined;
    let servicePrice = undefined;

    if (body.type === 'general') {
        subject = (validationResult.data as any).subject;
    } else {
        serviceName = (validationResult.data as any).serviceName;
        servicePrice = (validationResult.data as any).servicePrice;
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        type: body.type, // 'general' or 'corporate'
        fullName,
        email,
        phone: phone || "",
        company: company || "",
        subject,
        message,
        serviceName,
        servicePrice
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
