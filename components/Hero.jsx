import React from "react";

export default function Hero() {
  return (
    <div className="my-row hero">
      <div className="hero-box">
        <div className="box-text">
          <span style={{ fontSize: 32, fontWeight: "500" }}>Hello, I am</span>
          <h1>Atipat Daowraeng</h1>
          <span style={{ fontSize: 22, fontWeight: "500" }}>
            Data Scientist and Full-Stack Developer
          </span>
        </div>
      </div>
      <div className="hero-box" style={{ justifyContent: "end" }}>
        <img src="images/Hero-2.jpg" className="hero-img rounded-start-5" />
      </div>
    </div>
  );
}
