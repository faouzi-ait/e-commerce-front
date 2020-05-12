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
        padding: "1rem .5rem",
        color: "#fff",
        lineHeight: "2rem",
        background: "#000",
        borderRadius: "3px",
        textTransform: "uppercase"
      }}
    >
      <p>{msg}</p>
    </div>
  );
}
