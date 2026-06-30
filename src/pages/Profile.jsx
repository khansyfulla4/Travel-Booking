import React from "react";


export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-image"
        />

        <h1>User Profile</h1>

        <p><strong>Name:</strong> Patan Mohammad Saifulla Khan</p>
        <p><strong>Membership:</strong> Gold</p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}