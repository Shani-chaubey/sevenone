"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PropertiesManager from "@/components/admin/PropertiesManager";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import MetadataManager from "@/components/admin/MetadataManager";
import "./dashboard.css";

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("properties");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/check");
        const data = await res.json();
        if (data.authenticated) {
          setAuthenticated(true);
        } else {
          router.push("/admin/login");
        }
      } catch (error) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      // Logout failed
    }
  };

  if (loading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="admin-spinner"></div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <div className="admin-dashboard-title">
          <h1>Admin Dashboard</h1>
          <p>Manage properties, testimonials, and metadata</p>
        </div>
        <button onClick={handleLogout} className="admin-logout-btn">
          Logout
        </button>
      </div>

      <div className="admin-dashboard-tabs">
        <button
          className={`admin-tab ${activeTab === "properties" ? "active" : ""}`}
          onClick={() => setActiveTab("properties")}
        >
          Properties
        </button>
        <button
          className={`admin-tab ${
            activeTab === "testimonials" ? "active" : ""
          }`}
          onClick={() => setActiveTab("testimonials")}
        >
          Testimonials
        </button>
        <button
          className={`admin-tab ${activeTab === "metadata" ? "active" : ""}`}
          onClick={() => setActiveTab("metadata")}
        >
          Metadata
        </button>
      </div>

      <div className="admin-dashboard-content">
        {activeTab === "properties" && <PropertiesManager />}
        {activeTab === "testimonials" && <TestimonialsManager />}
        {activeTab === "metadata" && <MetadataManager />}
      </div>
    </div>
  );
}
