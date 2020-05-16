import React from "react";
import * as Yup from "yup";

export const validationSchemaLogin = Yup.object({
  password: Yup.string()
    .min(3, "Password of 3 characters minimum")
    .required("Your password is required"),
  email: Yup.string()
    .email("Email format: you@email.com")
    .required("Valid email is required"),
});

export const validationSchemaRegister = Yup.object({
  firstname: Yup.string()
    .min(3, "Firstname of 3 characters minimum")
    .required("Your firstname is required"),
  lastname: Yup.string()
    .min(3, "The lastname of 3 characters minimum")
    .required("Lastname is required"),
  password: Yup.string()
    .min(3, "Password of 3 characters minimum")
    .required("Password is required"),
  email: Yup.string()
    .email("Email format: you@email.com")
    .required("Valid email is required"),
});

export const validationSchemaContact = Yup.object({
  firstname: Yup.string()
    .min(3, "Firstname of 3 characters minimum")
    .required("Your firstname is required"),
  lastname: Yup.string()
    .min(3, "The lastname of 3 characters minimum")
    .required("Lastname is required"),
  email: Yup.string()
    .email("Email format: you@email.com")
    .required("Valid email is required"),
  message: Yup.string()
    .min(3, "Message of 20 characters minimum")
    .required("Message is required"),
});
