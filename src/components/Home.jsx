import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-light text-center p-5">
        <h1 className="fw-bold">Your Health, Our Priority</h1>
        <p className="fs-5 mt-3">
          Book appointments with trusted doctors anytime, anywhere.
        </p>
        <NavLink to="/appointment" className="btn btn-light btn-lg mt-3">
          Book Appointment
        </NavLink>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Our Services</h2>
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>General Consultation</h4>
              <p>Get expert advice for your health concerns.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>Online Appointment</h4>
              <p>Book doctors instantly from your home.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h4>24/7 Support</h4>
              <p>Our team is always available to assist you.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Doctors</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <img src="https://images.unsplash.com/photo-1612523138351-4643808db8f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERyLiUyMFJhaHVsfGVufDB8fDB8fHww" className="rounded" alt="Doctor" />
                <h5 className="mt-3">Dr. Rahul Mehta</h5>
                <p>Cardiologist</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdGVyfGVufDB8fDB8fHww" className="rounded" alt="Doctor" />
                <h5 className="mt-3">Dr. Priya Shah</h5>
                <p>Dermatologist</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <img src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdGVyfGVufDB8fDB8fHww" className="rounded" alt="Doctor" />
                <h5 className="mt-3">Dr. Karan Patel</h5>
                <p>Neurologist</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
