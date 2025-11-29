"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./admin-components.css";

export default function PropertiesManager() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    builder: "",
    type: [],
    price: "",
    location: "",
    image: "",
    images: [],
    specification: "",
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (data.success) {
        setProperties(data.data);
      }
    } catch (error) {
      // Error fetching properties
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingProperty
        ? `/api/properties/${editingProperty.id}`
        : "/api/properties";
      const method = editingProperty ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(
          editingProperty
            ? "Property updated successfully!"
            : "Property created successfully!"
        );
        fetchProperties();
        resetForm();
        setShowModal(false);
      } else {
        toast.error(data.error || "Failed to save property");
      }
    } catch (error) {
      toast.error("Error saving property: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this property?")) return;

    try {
      const res = await fetch(`/api/properties/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Property deleted successfully!");
        fetchProperties();
      } else {
        toast.error(data.error || "Failed to delete property");
      }
    } catch (error) {
      toast.error("Error deleting property");
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setFormData({
      name: property.name || "",
      builder: property.builder || "",
      type: property.type || [],
      price: property.price || "",
      location: property.location || "",
      image: property.image || "",
      images: property.images || [],
      specification: property.specification || "",
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      builder: "",
      type: [],
      price: "",
      location: "",
      image: "",
      images: [],
      specification: "",
    });
    setEditingProperty(null);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFormData({ ...formData, type: [...formData.type, value] });
    } else {
      setFormData({
        ...formData,
        type: formData.type.filter((t) => t !== value),
      });
    }
  };

  const handleImagesChange = (e) => {
    const images = e.target.value.split("\n").filter((img) => img.trim());
    setFormData({ ...formData, images });
  };

  const handleFileUpload = async (file, isMainImage = false) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        if (isMainImage) {
          setFormData({ ...formData, image: data.url });
        } else {
          setFormData({
            ...formData,
            images: [...formData.images, data.url],
          });
        }
        toast.success("File uploaded successfully!");
        return data.url;
      } else {
        toast.error("Failed to upload file: " + data.error);
        return null;
      }
    } catch (error) {
      toast.error("Error uploading file");
      return null;
    }
  };

  const handleImageFileChange = async (e, isMainImage = false) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    await handleFileUpload(file, isMainImage);
  };

  const handleMultipleImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length !== files.length) {
      toast.error("Please select only image files");
      return;
    }

    const uploadedUrls = [];
    for (const file of imageFiles) {
      const url = await handleFileUpload(file, false);
      if (url) {
        uploadedUrls.push(url);
      }
    }

    setFormData({
      ...formData,
      images: [...formData.images, ...uploadedUrls],
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading properties...</div>;
  }

  return (
    <div className="admin-manager">
      <div className="admin-manager-header">
        <h2>Properties Management</h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="admin-add-btn"
        >
          + Add Property
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Builder</th>
              <th>Type</th>
              <th>Price</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.name}</td>
                <td>{property.builder}</td>
                <td>{property.type.join(", ")}</td>
                <td>{property.price}</td>
                <td>{property.location}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(property)}
                      className="admin-edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="admin-delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div
          className="admin-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editingProperty ? "Edit Property" : "Add Property"}</h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="admin-modal-close"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Builder *</label>
                  <input
                    type="text"
                    value={formData.builder}
                    onChange={(e) =>
                      setFormData({ ...formData, builder: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Type *</label>
                <div className="admin-checkbox-group">
                  {["Residential", "Commercial"].map((type) => (
                    <label key={type} className="admin-checkbox-label">
                      <input
                        type="checkbox"
                        value={type}
                        checked={formData.type.includes(type)}
                        onChange={handleTypeChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Price *</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Specification (e.g., 2BHK, 3BHK, Retail, Office)</label>
                <input
                  type="text"
                  value={formData.specification}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specification: e.target.value,
                    })
                  }
                  placeholder="e.g., 2BHK, 3BHK, Retail, Office"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="admin-form-group">
                <label>Main Image *</label>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageFileChange(e, true)}
                    style={{ flex: 1 }}
                  />
                  <input
                    type="text"
                    placeholder="Or enter URL"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    style={{ flex: 1 }}
                  />
                </div>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    style={{
                      marginTop: "8px",
                      maxWidth: "200px",
                      maxHeight: "150px",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </div>

              <div className="admin-form-group">
                <label>Additional Images *</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleMultipleImagesChange}
                  style={{ marginBottom: "12px" }}
                />
                <textarea
                  placeholder="Or enter URLs (one per line)"
                  value={formData.images.join("\n")}
                  onChange={handleImagesChange}
                  rows={4}
                />
                {formData.images.length > 0 && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(100px, 1fr))",
                      gap: "8px",
                      marginTop: "12px",
                    }}
                  >
                    {formData.images.map((img, idx) => (
                      <div key={idx} style={{ position: "relative" }}>
                        <img
                          src={img}
                          alt={`Preview ${idx + 1}`}
                          style={{
                            width: "100%",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              images: formData.images.filter(
                                (_, i) => i !== idx
                              ),
                            });
                          }}
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "4px",
                            background: "rgba(239, 68, 68, 0.9)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="admin-save-btn">
                  {editingProperty ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="admin-cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
