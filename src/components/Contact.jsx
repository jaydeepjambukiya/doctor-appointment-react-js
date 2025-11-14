import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // send mail
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_atovyms",
        "template_s0w1c69",
        form,
        "pPKrUwkw7kPZev2it"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed! Check console.");
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <form className="shadow p-4 rounded bg-light" onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Write message"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Clinic Address</h4>
          <p>Ahmedabad, Gujarat, India</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: info@myclinic.com</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.01869409089!2d72.5540927743018!3d23.02308581631092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85558e268fcd%3A0xe5ba6fa8382060ed!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1763093583683!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google-map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
