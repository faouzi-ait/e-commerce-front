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

export const calculateGrandTotalPrice = (cart) => {
  const grandTotal = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  return Number(grandTotal);
};

export const getItemFromCart = (cart, id) => {
  return cart.find((item) => item._id === id);
};

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
