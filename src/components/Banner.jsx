import React from 'react'

const Banner = () => {
  return (
    <div className="container py-5">

      <h2 className="fw-bold text-center mb-4">Banner Section</h2>

      <div className="text-center">
        <img
          src="https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg
"
          className="img-fluid rounded shadow"
          alt="Banner"
        />
      </div>

      <div className="mt-4 text-center">
        <h4 className="fw-bold">Welcome to Our Healthcare Portal</h4>
        <p className="mt-2">
          We ensure quality medical services with modern facilities and expert doctors.
        </p>
      </div>

    </div>
  )
}

export default Banner