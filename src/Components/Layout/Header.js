import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="mb-0 text-primary text-uppercase"><i className="fa fa-cut me-3"></i>HairCut</h1>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink exact to='/' className="nav-item nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
              <NavLink to="/team" className="dropdown-item">Our Barber</NavLink>
              <a href="open.html" className="dropdown-item">Working Hours</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
        </div>
        <a href="" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
  );
};

export default Header;
