"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./admin-components.css";

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    text: "",
    rating: 5,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      // Error fetching testimonials
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingTestimonial
        ? `/api/testimonials/${editingTestimonial.id}`
        : "/api/testimonials";
      const method = editingTestimonial ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(
          editingTestimonial
            ? "Testimonial updated successfully!"
            : "Testimonial created successfully!"
        );
        fetchTestimonials();
        resetForm();
        setShowModal(false);
      } else {
        toast.error(data.error || "Failed to save testimonial");
      }
    } catch (error) {
      toast.error("Error saving testimonial");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Testimonial deleted successfully!");
        fetchTestimonials();
      } else {
        toast.error(data.error || "Failed to delete testimonial");
      }
    } catch (error) {
      toast.error("Error deleting testimonial");
    }
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name || "",
      role: testimonial.role || "",
      image: testimonial.image || "",
      text: testimonial.text || "",
      rating: testimonial.rating || 5,
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      image: "",
      text: "",
      rating: 5,
    });
    setEditingTestimonial(null);
  };

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        toast.success("File uploaded successfully!");
        setFormData({ ...formData, image: data.url });
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

  const handleImageFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    await handleFileUpload(file);
  };

  if (loading) {
    return <div className="admin-loading">Loading testimonials...</div>;
  }

  return (
    <div className="admin-manager">
      <div className="admin-manager-header">
        <h2>Testimonials Management</h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="admin-add-btn"
        >
          + Add Testimonial
        </button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Rating</th>
              <th>Text Preview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td>{testimonial.id}</td>
                <td>{testimonial.name}</td>
                <td>{testimonial.role}</td>
                <td>{testimonial.rating} ⭐</td>
                <td>{testimonial.text.substring(0, 50)}...</td>
                <td>
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="admin-edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="admin-delete-btn"
                  >
                    Delete
                  </button>
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
              <h3>
                {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
              </h3>
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
                  <label>Role *</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Image *</label>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
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
                <label>Rating *</label>
                <select
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: parseInt(e.target.value),
                    })
                  }
                  required
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Testimonial Text *</label>
                <textarea
                  value={formData.text}
                  onChange={(e) =>
                    setFormData({ ...formData, text: e.target.value })
                  }
                  rows={6}
                  required
                />
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="admin-save-btn">
                  {editingTestimonial ? "Update" : "Create"}
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
