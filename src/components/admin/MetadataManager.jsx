"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./admin-components.css";

export default function MetadataManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    ogUrl: "",
    twitterCard: "summary_large_image",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",
  });

  useEffect(() => {
    fetchMetadata();
  }, []);

  const fetchMetadata = async () => {
    try {
      const res = await fetch("/api/metadata");
      const data = await res.json();
      if (data.success && data.data) {
        setFormData({
          title: data.data.title || "",
          description: data.data.description || "",
          keywords: data.data.keywords || "",
          ogTitle: data.data.ogTitle || "",
          ogDescription: data.data.ogDescription || "",
          ogImage: data.data.ogImage || "",
          ogUrl: data.data.ogUrl || "",
          twitterCard: data.data.twitterCard || "summary_large_image",
          twitterTitle: data.data.twitterTitle || "",
          twitterDescription: data.data.twitterDescription || "",
          twitterImage: data.data.twitterImage || "",
        });
      }
    } catch (error) {
      toast.error("Failed to load metadata");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/metadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Metadata saved successfully!");
      } else {
        toast.error(data.error || "Failed to save metadata");
      }
    } catch (error) {
      toast.error("Failed to save metadata");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setFormData((prev) => ({
          ...prev,
          [fieldName]: data.url,
        }));
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      toast.error("Failed to upload image");
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner"></div>
        <p>Loading metadata...</p>
      </div>
    );
  }

  return (
    <div className="admin-manager">
      <div className="admin-manager-header">
        <h2>Homepage Metadata</h2>
        <p>Manage SEO and social media metadata for the homepage</p>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-form-section">
          <h3 className="admin-form-section-title">Basic SEO</h3>

          <div className="admin-form-group">
            <label htmlFor="title">Page Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter page title"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="description">Meta Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Enter meta description (recommended: 150-160 characters)"
              maxLength={160}
            />
            <span className="admin-form-helper">
              {formData.description.length}/160 characters
            </span>
          </div>

          <div className="admin-form-group">
            <label htmlFor="keywords">Keywords</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Enter keywords separated by commas"
            />
          </div>
        </div>

        <div className="admin-form-section">
          <h3 className="admin-form-section-title">
            Open Graph (Facebook, LinkedIn)
          </h3>

          <div className="admin-form-group">
            <label htmlFor="ogTitle">OG Title</label>
            <input
              type="text"
              id="ogTitle"
              name="ogTitle"
              value={formData.ogTitle}
              onChange={handleChange}
              placeholder="Leave empty to use page title"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="ogDescription">OG Description</label>
            <textarea
              id="ogDescription"
              name="ogDescription"
              value={formData.ogDescription}
              onChange={handleChange}
              rows="3"
              placeholder="Leave empty to use meta description"
              maxLength={200}
            />
            <span className="admin-form-helper">
              {formData.ogDescription.length}/200 characters
            </span>
          </div>

          <div className="admin-form-group">
            <label htmlFor="ogImage">OG Image URL</label>
            <div className="admin-form-image-upload">
              <input
                type="text"
                id="ogImage"
                name="ogImage"
                value={formData.ogImage}
                onChange={handleChange}
                placeholder="Enter image URL or upload"
              />
              <label htmlFor="ogImageUpload" className="admin-upload-btn">
                Upload
                <input
                  type="file"
                  id="ogImageUpload"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "ogImage")}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            {formData.ogImage && (
              <div className="admin-form-image-preview">
                <img src={formData.ogImage} alt="OG Preview" />
              </div>
            )}
          </div>

          <div className="admin-form-group">
            <label htmlFor="ogUrl">OG URL</label>
            <input
              type="url"
              id="ogUrl"
              name="ogUrl"
              value={formData.ogUrl}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div className="admin-form-section">
          <h3 className="admin-form-section-title">Twitter Card</h3>

          <div className="admin-form-group">
            <label htmlFor="twitterCard">Card Type</label>
            <select
              id="twitterCard"
              name="twitterCard"
              value={formData.twitterCard}
              onChange={handleChange}
            >
              <option value="summary">Summary</option>
              <option value="summary_large_image">
                Summary with Large Image
              </option>
            </select>
          </div>

          <div className="admin-form-group">
            <label htmlFor="twitterTitle">Twitter Title</label>
            <input
              type="text"
              id="twitterTitle"
              name="twitterTitle"
              value={formData.twitterTitle}
              onChange={handleChange}
              placeholder="Leave empty to use OG title"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="twitterDescription">Twitter Description</label>
            <textarea
              id="twitterDescription"
              name="twitterDescription"
              value={formData.twitterDescription}
              onChange={handleChange}
              rows="3"
              placeholder="Leave empty to use OG description"
              maxLength={200}
            />
            <span className="admin-form-helper">
              {formData.twitterDescription.length}/200 characters
            </span>
          </div>

          <div className="admin-form-group">
            <label htmlFor="twitterImage">Twitter Image URL</label>
            <div className="admin-form-image-upload">
              <input
                type="text"
                id="twitterImage"
                name="twitterImage"
                value={formData.twitterImage}
                onChange={handleChange}
                placeholder="Enter image URL or upload"
              />
              <label htmlFor="twitterImageUpload" className="admin-upload-btn">
                Upload
                <input
                  type="file"
                  id="twitterImageUpload"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "twitterImage")}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            {formData.twitterImage && (
              <div className="admin-form-image-preview">
                <img src={formData.twitterImage} alt="Twitter Preview" />
              </div>
            )}
          </div>
        </div>

        <div className="admin-form-actions">
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Metadata"}
          </button>
        </div>
      </form>
    </div>
  );
}
