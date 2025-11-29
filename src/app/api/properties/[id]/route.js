import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");
    const id = pathParts[pathParts.length - 1];

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid property ID" },
        { status: 400 }
      );
    }

    const property = await Property.findById(id);

    if (!property) {
      return NextResponse.json(
        { success: false, error: "Property not found" },
        { status: 404 }
      );
    }

    const propertyData = {
      id: property._id.toString(),
      name: property.name,
      builder: property.builder,
      type: property.type,
      price: property.price,
      location: property.location,
      image: property.image,
      images: property.images,
      specification: property.specification || "",
    };

    return NextResponse.json({ success: true, data: propertyData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    const body = await request.json();

    // Validate ObjectId format
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: `Invalid property ID: ${id}` },
        { status: 400 }
      );
    }

    const updateData = {
      name: body.name,
      builder: body.builder,
      type: body.type,
      price: body.price,
      location: body.location,
      image: body.image,
      images: body.images,
    };

    // Always set specification, even if empty string
    if (body.specification !== undefined && body.specification !== null) {
      updateData.specification = String(body.specification);
    } else {
      updateData.specification = "";
    }

    const property = await Property.findByIdAndUpdate(
      id,
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!property) {
      return NextResponse.json(
        { success: false, error: "Property not found" },
        { status: 404 }
      );
    }

    const propertyData = {
      id: property._id.toString(),
      name: property.name,
      builder: property.builder,
      type: property.type,
      price: property.price,
      location: property.location,
      image: property.image,
      images: property.images,
      specification: property.specification || "",
    };

    return NextResponse.json({ success: true, data: propertyData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");
    const id = pathParts[pathParts.length - 1];

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid property ID" },
        { status: 400 }
      );
    }

    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return NextResponse.json(
        { success: false, error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Property deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
