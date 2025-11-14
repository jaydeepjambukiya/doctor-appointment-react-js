const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Medical Services</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4>General Checkup</h4>
            <p>Complete health examination by expert doctors.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4>Emergency Care</h4>
            <p>24x7 emergency medical support available.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4>Diagnostics</h4>
            <p>Blood tests, X-ray, ECG, and more.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
