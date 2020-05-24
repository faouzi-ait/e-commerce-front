import React from "react";

function DashboardProfile({ user }) {
  return (
    <div className="dashboard__profile--container">
      <div style={{ marginBottom: ".5rem" }}>
        <span style={{ fontWeight: "bold" }}>Firstname: </span>
        {user.firstname}
      </div>
      <div style={{ marginBottom: ".5rem" }}>
        <span style={{ fontWeight: "bold" }}>Lastname: </span>
        {user.lastname}
      </div>
      <div>
        <span style={{ fontWeight: "bold", marginRight: "7px" }}>Since:</span>
        {user.createdAt.split("T")[0]}
      </div>
    </div>
  );
}

export default DashboardProfile;
