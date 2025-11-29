/**
 * Migration script to import data from data.json to MongoDB
 * Run with: node scripts/migrate-to-mongodb.js
 */

import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Property from "../src/models/Property.js";
import Testimonial from "../src/models/Testimonial.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  process.exit(1);
}

async function migrate() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);

    // Read data.json
    const dataPath = path.join(__dirname, "../src/data/data.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    // Migrate Properties
    if (data.properties && data.properties.length > 0) {
      console.log(`Migrating ${data.properties.length} properties...`);
      for (const property of data.properties) {
        const { id, ...propertyData } = property;
        await Property.findOneAndUpdate(
          { name: property.name, builder: property.builder },
          propertyData,
          { upsert: true, new: true }
        );
      }
      console.log("Properties migrated successfully");
    }

    // Migrate Testimonials
    if (data.testimonials && data.testimonials.length > 0) {
      console.log(`Migrating ${data.testimonials.length} testimonials...`);
      for (const testimonial of data.testimonials) {
        const { id, ...testimonialData } = testimonial;
        await Testimonial.findOneAndUpdate(
          { name: testimonial.name, text: testimonial.text },
          testimonialData,
          { upsert: true, new: true }
        );
      }
      console.log("Testimonials migrated successfully");
    }

    console.log("Migration completed!");
    process.exit(0);
  } catch (error) {
    console.error("Migration error:", error);
    process.exit(1);
  }
}

migrate();
