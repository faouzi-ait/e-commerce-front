import React from "react";

function FormField({ field, type, meta, touched, errors, placeholder }) {
  return (
    <div style={{ textAlign: "left" }}>
      <input
        {...field}
        type={type}
        style={touched[type] && errors[type] && { border: "1px solid red" }}
        placeholder={placeholder}
        autoComplete="off"
      />
      {meta.touched && meta.error && (
        <div
          style={{
            color: "red",
            marginTop: "-10px",
            marginBottom: "1rem",
          }}
        >
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default FormField;
