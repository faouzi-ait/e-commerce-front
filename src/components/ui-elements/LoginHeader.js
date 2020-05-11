import React from "react";

export default function LoginHeader({ msg }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: ".5rem auto 2rem",
        padding: "1.5rem 0",
        color: "#fff",
        lineHeight: "2rem",
        background: "#000",
        borderRadius: "3px",
      }}
    >
      <p>{msg}</p>
    </div>
  );
}
