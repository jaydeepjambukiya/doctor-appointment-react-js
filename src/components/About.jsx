const About = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">About Our Clinic</h2>

      <p className="fs-5 text-center">
        We are a trusted medical clinic providing health services with expert doctors.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1665990294519-7f1b5b8bcfc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
            className="img-fluid rounded"
            alt="Clinic"
          />
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <p className="fs-5">
            Our mission is to deliver high-quality healthcare with compassion,
            professionalism, and trust. We provide modern facilities, experienced
            doctors, and 24/7 support for all your health needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
