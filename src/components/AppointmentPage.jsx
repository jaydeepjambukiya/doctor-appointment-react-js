import React, { useState } from "react";
import emailjs from "emailjs-com";

const AppointmentPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_atovyms",
        "template_mg8hi07",
        form,
        "pPKrUwkw7kPZev2it"
      )
      .then(() => {
        alert("Appointment Sent Successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Book Your Appointment</h2>

      <form onSubmit={sendEmail} className="shadow p-4 rounded bg-light">

        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="phone"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Phone"
          required
        />

        <select
          name="doctor"
          onChange={handleChange}
          className="form-control mb-3"
        >
          <option>Select Doctor</option>
          <option>Dr. Rahul - Cardiologist</option>
          <option>Dr. Priya - Dermatologist</option>
          <option>Dr. Karan - Neurologist</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button className="btn btn-primary w-100">Send Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
