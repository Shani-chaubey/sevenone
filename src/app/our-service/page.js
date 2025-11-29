import { Suspense } from "react";
import PropertiesPage from "@/components/Properties/PropertiesPage";

export const metadata = {
  title: "Our Services - All Properties | 9 Square Yard",
  description:
    "Browse our complete collection of premium real estate properties. Search and filter by type, location, and builder to find your perfect property.",
};

function PropertiesPageWrapper() {
  return <PropertiesPage />;
}

export default function OurServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertiesPageWrapper />
    </Suspense>
  );
}
