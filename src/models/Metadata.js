import mongoose from "mongoose";

const MetadataSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      default: "homepage",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    keywords: {
      type: String,
      required: false,
      default: "",
    },
    ogTitle: {
      type: String,
      required: false,
      default: "",
    },
    ogDescription: {
      type: String,
      required: false,
      default: "",
    },
    ogImage: {
      type: String,
      required: false,
      default: "",
    },
    ogUrl: {
      type: String,
      required: false,
      default: "",
    },
    twitterCard: {
      type: String,
      required: false,
      default: "summary_large_image",
    },
    twitterTitle: {
      type: String,
      required: false,
      default: "",
    },
    twitterDescription: {
      type: String,
      required: false,
      default: "",
    },
    twitterImage: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const Metadata =
  mongoose.models.Metadata || mongoose.model("Metadata", MetadataSchema);

export default Metadata;
