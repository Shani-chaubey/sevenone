import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Metadata from "@/models/Metadata";

export async function GET() {
  try {
    await connectDB();
    const metadata = await Metadata.findOne({ page: "homepage" });

    if (!metadata) {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch metadata",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const metadataData = {
      page: "homepage",
      title: String(body.title || ""),
      description: String(body.description || ""),
      keywords: String(body.keywords || ""),
      ogTitle: String(body.ogTitle || ""),
      ogDescription: String(body.ogDescription || ""),
      ogImage: String(body.ogImage || ""),
      ogUrl: String(body.ogUrl || ""),
      twitterCard: String(body.twitterCard || "summary_large_image"),
      twitterTitle: String(body.twitterTitle || ""),
      twitterDescription: String(body.twitterDescription || ""),
      twitterImage: String(body.twitterImage || ""),
    };

    let metadata = await Metadata.findOne({ page: "homepage" });

    if (metadata) {
      metadata = await Metadata.findOneAndUpdate(
        { page: "homepage" },
        { $set: metadataData },
        { new: true, runValidators: true }
      );
    } else {
      metadata = await Metadata.create(metadataData);
    }

    return NextResponse.json({
      success: true,
      data: metadata,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save metadata",
      },
      { status: 500 }
    );
  }
}
