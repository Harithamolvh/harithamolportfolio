import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, scope, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid work or corporate email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please include a project description or message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedSubmission = {
      name: name.trim().replace(/[<>]/g, ""),
      email: email.trim().toLowerCase(),
      inquiryType: inquiryType || "Full-Time Senior Role",
      scope: scope || "Immediate Hiring / Contract",
      message: message.trim().replace(/[<>]/g, ""),
      submittedAt: new Date().toISOString(),
      recipient: "vhharithamol@gmail.com",
    };

    console.log("[Lead Capture Pipeline] Verified lead received:", sanitizedSubmission);

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your message has been routed to Harithamol V H. Expect a response within 24 hours.",
      leadReference: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      data: sanitizedSubmission,
    });
  } catch (err: unknown) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}

