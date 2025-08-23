import React from "react";

function Gallery() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Our Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <img
          src="/images/proj1.jpg"
          alt="Project 1"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <img
          src="/images/proj2.jpg"
          alt="Project 2"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <img
          src="/images/proj3.jpg"
          alt="Project 3"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default Gallery;
