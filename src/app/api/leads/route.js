import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendLeadEmail } from "@/lib/email";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.propertyType) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, phone, and property type are required",
        },
        { status: 400 }
      );
    }

    // Create lead
    const leadData = {
      name: body.name,
      email: body.email || "",
      phone: body.phone,
      propertyType: body.propertyType,
      consent: body.consent !== undefined ? body.consent : true,
    };

    const newLead = await Lead.create(leadData);

    // Send email (don't fail if email fails)
    try {
      await sendLeadEmail(leadData);
    } catch (emailError) {
      // Failed to send email, but lead saved
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: newLead._id.toString(),
          name: newLead.name,
          email: newLead.email,
          phone: newLead.phone,
          propertyType: newLead.propertyType,
          consent: newLead.consent,
          createdAt: newLead.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    // Check authentication (password-protected)
    const authHeader = request.headers.get("authorization");
    // Support both env vars for compatibility
    const password =
      process.env.LEADS_DASHBOARD_PASSWORD ||
      process.env.NEXT_PUBLIC_LEADS_DASHBOARD_PASSWORD ||
      "admin123";

    if (!authHeader) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "").trim();

    // Check if token matches password (token is the password itself)
    if (token !== password) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get query parameters for date filtering
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    // Build query
    const query = {};
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) {
        query.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        // Set end date to end of day
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        query.createdAt.$lte = end;
      }
    }

    const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();

    const leadsData = leads.map((lead) => ({
      id: lead._id.toString(),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      propertyType: lead.propertyType,
      consent: lead.consent,
      createdAt: lead.createdAt,
      updatedAt: lead.updatedAt,
    }));

    return NextResponse.json({ success: true, data: leadsData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
