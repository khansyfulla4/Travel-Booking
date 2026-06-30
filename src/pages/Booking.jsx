import React, { useState } from "react";


export default function Booking() {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful");
  };

  return (
    <div className="booking-page">
      <form onSubmit={handleSubmit} className="form">
        <h2>Travel Booking</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <button type="submit">Book Trip</button>
      </form>
    </div>
  );
}