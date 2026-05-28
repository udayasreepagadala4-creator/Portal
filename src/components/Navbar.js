import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#3b82f6" }}>Placement Portal</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/courses" style={linkStyle}>Courses</Link>
        <Link to="/enquiry" style={linkStyle}>Enquiry</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;