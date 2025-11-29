import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";

export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find({}).sort({ createdAt: -1 });

    // Convert MongoDB documents to plain objects with id
    const propertiesData = properties.map((prop) => ({
      id: prop._id.toString(),
      name: prop.name,
      builder: prop.builder,
      type: prop.type,
      price: prop.price,
      location: prop.location,
      image: prop.image,
      images: prop.images,
      specification: prop.specification || "",
    }));

    return NextResponse.json({ success: true, data: propertiesData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const createData = {
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
      createData.specification = String(body.specification);
    } else {
      createData.specification = "";
    }

    const newProperty = await Property.create(createData);

    const propertyData = {
      id: newProperty._id.toString(),
      name: newProperty.name,
      builder: newProperty.builder,
      type: newProperty.type,
      price: newProperty.price,
      location: newProperty.location,
      image: newProperty.image,
      images: newProperty.images,
      specification: newProperty.specification || "",
    };

    return NextResponse.json(
      { success: true, data: propertyData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
