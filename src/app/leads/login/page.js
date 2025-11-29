"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LeadsLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem("leads-auth-token");
    if (token) {
      router.push("/leads/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/leads/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success && data.token) {
        // Set token first
        localStorage.setItem("leads-auth-token", data.token);
        // Wait a tiny bit to ensure localStorage is set, then redirect
        setTimeout(() => {
          router.replace("/leads/dashboard");
        }, 100);
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="leads-login-container">
      <div className="leads-login-card">
        <div className="leads-login-header">
          <h1 className="leads-login-title">Leads Dashboard</h1>
          <p className="leads-login-subtitle">Enter password to access</p>
        </div>
        <form onSubmit={handleSubmit} className="leads-login-form">
          <div className="leads-login-group">
            <label htmlFor="password" className="leads-login-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="leads-login-input"
              placeholder="Enter password"
              required
              autoFocus
            />
          </div>
          {error && <div className="leads-login-error">{error}</div>}
          <button
            type="submit"
            className="leads-login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
