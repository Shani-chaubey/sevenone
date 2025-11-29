"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

const propertyTypeLabels = {
  "2 BHK": "2 BHK",
  "3 BHK": "3 BHK",
  "4 BHK": "4 BHK",
  "RETAIL SHOP": "Retail Shops",
  "STUDIO APARTMENT": "Studio Apartment",
  "OFFICE SPACE": "Office Space",
  OTHER: "Others",
};

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredLeads, setFilteredLeads] = useState([]);
  const router = useRouter();

  const fetchLeads = useCallback(async () => {
    try {
      const token = localStorage.getItem("leads-auth-token");
      if (!token) {
        router.push("/leads/login");
        return;
      }

      const url = new URL("/api/leads", window.location.origin);
      if (startDate) url.searchParams.append("startDate", startDate);
      if (endDate) url.searchParams.append("endDate", endDate);

      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setLeads(data.data);
      } else if (response.status === 401) {
        localStorage.removeItem("leads-auth-token");
        // Use replace to avoid back button issues
        router.replace("/leads/login");
      }
    } catch (error) {
      // Error fetching leads
    } finally {
      setLoading(false);
    }
  }, [router, startDate, endDate]);

  useEffect(() => {
    // Check authentication - add a small delay to avoid race condition
    const checkAuth = () => {
      const token = localStorage.getItem("leads-auth-token");
      if (!token) {
        router.push("/leads/login");
        return;
      }

      // Only fetch leads if we have a token
      if (token) {
        fetchLeads();
      }
    };

    // Small delay to ensure we're not in a redirect loop
    const timeoutId = setTimeout(checkAuth, 50);
    return () => clearTimeout(timeoutId);
  }, [router, fetchLeads]);

  useEffect(() => {
    // Apply date filter
    if (!startDate && !endDate) {
      setFilteredLeads(leads);
      return;
    }

    const filtered = leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt);
      if (startDate && leadDate < new Date(startDate)) return false;
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        if (leadDate > end) return false;
      }
      return true;
    });

    setFilteredLeads(filtered);
  }, [leads, startDate, endDate]);

  const handleLogout = () => {
    localStorage.removeItem("leads-auth-token");
    router.push("/leads/login");
  };

  const handleFilter = () => {
    fetchLeads();
  };

  const handleClearFilter = () => {
    setStartDate("");
    setEndDate("");
    fetchLeads();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="leads-dashboard-container">
        <div className="leads-dashboard-loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="leads-dashboard-container">
      <div className="leads-dashboard-header">
        <div>
          <h1 className="leads-dashboard-title">Leads Dashboard</h1>
          <p className="leads-dashboard-subtitle">
            Total Leads: {filteredLeads.length}
          </p>
        </div>
        <button onClick={handleLogout} className="leads-dashboard-logout">
          Logout
        </button>
      </div>

      <div className="leads-dashboard-filters">
        <div className="leads-filter-group">
          <label htmlFor="startDate" className="leads-filter-label">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="leads-filter-input"
          />
        </div>
        <div className="leads-filter-group">
          <label htmlFor="endDate" className="leads-filter-label">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="leads-filter-input"
          />
        </div>
        <div className="leads-filter-actions">
          <button onClick={handleFilter} className="leads-filter-button">
            Apply Filter
          </button>
          <button
            onClick={handleClearFilter}
            className="leads-filter-button secondary"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="leads-dashboard-table-wrapper">
        <table className="leads-dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Property Type</th>
              <th>Consent</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="6" className="leads-dashboard-empty">
                  No leads found
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.email || "—"}</td>
                  <td>{lead.phone}</td>
                  <td>
                    {propertyTypeLabels[lead.propertyType] || lead.propertyType}
                  </td>
                  <td>{lead.consent ? "Yes" : "No"}</td>
                  <td>{formatDate(lead.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
