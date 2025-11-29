import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });

    // Convert MongoDB documents to plain objects with id
    const testimonialsData = testimonials.map((testimonial) => ({
      id: testimonial._id.toString(),
      name: testimonial.name,
      role: testimonial.role,
      image: testimonial.image,
      text: testimonial.text,
      rating: testimonial.rating,
    }));

    return NextResponse.json({ success: true, data: testimonialsData });
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

    const newTestimonial = await Testimonial.create({
      name: body.name,
      role: body.role,
      image: body.image,
      text: body.text,
      rating: body.rating,
    });

    const testimonialData = {
      id: newTestimonial._id.toString(),
      name: newTestimonial.name,
      role: newTestimonial.role,
      image: newTestimonial.image,
      text: newTestimonial.text,
      rating: newTestimonial.rating,
    };

    return NextResponse.json(
      { success: true, data: testimonialData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
