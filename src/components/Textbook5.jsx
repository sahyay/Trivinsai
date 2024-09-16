import React from 'react';

export default function Textbook5() {
  return (
    <div className="container-fluid mt-5 p-3" id="booking">
      <div className="formcont container p-4 border rounded shadow-lg">
        <h2 className="formheadline text-center mt-4">Contact Us</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5"> 
            <form className="custom-form">
              <div className="mb-4">
                <label htmlFor="firstName" className="formdesc form-label">Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Name" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="formdesc form-label">Email address*</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="formdesc form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Phone" />
              </div>

              <div className="mb-5">
                <label htmlFor="notes" className="formdesc form-label">Notes</label>
                <textarea className="form-control" id="notes" rows="3" placeholder="Your notes..."></textarea>
              </div>

              <div className="text-center mb-5">
                <button className="btn-custom start-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
