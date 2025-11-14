import React from "react";

const BlogPage = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Latest Blog Posts</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm p-3 h-100">
            <img
              src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg
"
              className="card-img-top rounded"
              alt="Blog"
            />
            <h5 className="mt-3">Healthy Lifestyle Tips</h5>
            <p>Learn how to maintain a healthy daily routine…</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 h-100">
            <img
              src="https://plus.unsplash.com/premium_photo-1723618946732-34c22539c8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9wJTIwMTAlMjBIZWFydCUyMENhcmUlMjBUaXBzfGVufDB8fDB8fHww
"
              className="card-img-top rounded"
              alt="Blog"
            />
            <h5 className="mt-3">Top 10 Heart Care Tips</h5>
            <p>Keep your heart healthy with these lifestyle changes…</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 h-100">
            <img
              src="https://images.pexels.com/photos/3764566/pexels-photo-3764566.jpeg
"
              className="card-img-top rounded"
              alt="Blog"
            />
            <h5 className="mt-3">Skin Care Routine</h5>
            <p>Dermatologists recommend this daily skincare routine…</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
