import Link from "next/link";
import React, { useState } from "react";

export default function Navbar(props) {
  const itemNav = [
    { text: "Home", href: "/" },
    { text: "Experience", href: "/experience" },
    { text: "Contact", href: "/contact" },
    { text: "Lab-07", href: "/lab-07" },
  ];
  return (
    <div className="navbar-container">
      <nav className="my-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            ATIPAT
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav gap-3">
              {itemNav.map((x, i) => {
                return (
                  <li key={i} className="nav-item">
                    <Link href={x.href}>
                      <a
                        className={`nav-link ${
                          props.page === x.text ? "active" : ""
                        } hover-underline-animation`}
                      >
                        {x.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
