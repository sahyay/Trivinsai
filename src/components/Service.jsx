import React from "react";

export default function Service(props) {
  return (
    <div className="card h-100" style={{ width: '18rem' }}>
      <div className="card-img-container">
        <img src={props.src} className="card-img-top" alt={props.alt} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
