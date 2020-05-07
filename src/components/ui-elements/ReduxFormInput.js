import React from "react";
import { Field } from "redux-form";

export default function ReduxFormInput({ name, type, placeholder }) {
  return (
    <Field
      name={name}
      id={name}
      type={type}
      component="input"
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}
