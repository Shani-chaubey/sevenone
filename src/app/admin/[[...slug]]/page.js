"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./admin-catchall.css";

export default function AdminCatchAll() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      try {
        // Check if user is authenticated
        const res = await fetch("/api/auth/check");
        const data = await res.json();

        if (!data.authenticated) {
          // Not authenticated, redirect to login
          router.replace("/admin/login");
          return;
        }

        // Authenticated but on invalid route, redirect to dashboard
        // Only /admin/login and /admin/dashboard are valid routes
        if (pathname !== "/admin/login" && pathname !== "/admin/dashboard") {
          router.replace("/admin/dashboard");
          return;
        }
      } catch (error) {
        router.replace("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndRedirect();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="admin-spinner"></div>
      </div>
    );
  }

  return null;
}
