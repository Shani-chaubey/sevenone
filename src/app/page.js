import Homepage from "@/components/homepage/Homepage";
import connectDB from "@/lib/mongodb";
import Metadata from "@/models/Metadata";

export async function generateMetadata() {
  try {
    await connectDB();
    const metadata = await Metadata.findOne({ page: "homepage" });

    if (!metadata) {
      return {
        title: "9 Square Yard",
        description:
          "Experience a modern real-estate landing page built with reusable Next.js components and immersive UI details.",
      };
    }

    const ogTitle = metadata.ogTitle || metadata.title;
    const ogDescription = metadata.ogDescription || metadata.description;
    const ogImage = metadata.ogImage || "";
    const ogUrl = metadata.ogUrl || "";

    const twitterTitle = metadata.twitterTitle || ogTitle;
    const twitterDescription = metadata.twitterDescription || ogDescription;
    const twitterImage = metadata.twitterImage || ogImage;

    const metadataObject = {
      title: metadata.title || "9 Square Yard",
      description: metadata.description || "",
      keywords: metadata.keywords || undefined,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        images: ogImage ? [{ url: ogImage }] : undefined,
        url: ogUrl || undefined,
        type: "website",
      },
      twitter: {
        card: metadata.twitterCard || "summary_large_image",
        title: twitterTitle,
        description: twitterDescription,
        images: twitterImage ? [twitterImage] : undefined,
      },
    };

    // Remove undefined values
    Object.keys(metadataObject).forEach((key) => {
      if (metadataObject[key] === undefined) {
        delete metadataObject[key];
      }
    });

    if (metadataObject.openGraph) {
      Object.keys(metadataObject.openGraph).forEach((key) => {
        if (metadataObject.openGraph[key] === undefined) {
          delete metadataObject.openGraph[key];
        }
      });
    }

    if (metadataObject.twitter) {
      Object.keys(metadataObject.twitter).forEach((key) => {
        if (metadataObject.twitter[key] === undefined) {
          delete metadataObject.twitter[key];
        }
      });
    }

    return metadataObject;
  } catch (error) {
    return {
      title: "9 Square Yard",
      description:
        "Experience a modern real-estate landing page built with reusable Next.js components and immersive UI details.",
    };
  }
}

export default function Home() {
  return <Homepage />;
}
