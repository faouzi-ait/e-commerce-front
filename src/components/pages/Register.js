import React from "react";
import LoginHeader from "../ui-elements/LoginHeader";

import FormFieldWrapper from "../ui-elements/FormFieldsWrapper";
import { Formik, Form } from "formik";
import { validationSchemaRegister } from "../../utils/utilities";

import { useSelector, useDispatch } from "react-redux";
import { register_user } from "../../redux/features/registration/action";

function Register() {
  const dispatch = useDispatch();

  const register_error = useSelector(
    (state) => state?.registration?.errorMessage?.response
  );
  const register_success = useSelector(
    (state) => state?.registration?.user?.message
  );

  const onSubmit = (values, { resetForm }) => {
    const { firstname, lastname, email, password } = values;
    dispatch(
      register_user(
        {
          firstname,
          lastname,
          email,
          password,
        },
        () =>
          setTimeout(() => {
            //history.push("/login");
          }, 1500)
      )
    );
    resetForm();
  };

  return (
    <div className="registration__form">
      <fieldset className="responsive__margin">
        <LoginHeader msg="Create your account for full access" />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchemaRegister}
          onSubmit={onSubmit}
        >
          <Form>
            <FormFieldWrapper
              forHtml="firstname"
              label="Firstname: "
              type="text"
              placeholder="Type in your firstname"
            />
            <FormFieldWrapper
              forHtml="lastname"
              label="Lastname: "
              type="text"
              placeholder="Type in your lastname"
            />
            <FormFieldWrapper
              forHtml="email"
              label="Email: "
              type="text"
              placeholder="Type in your email"
            />
            <FormFieldWrapper
              forHtml="password"
              label="Password: "
              type="password"
              placeholder="Type in your password"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <button type="submit" className="register__btn--screen">
                register
              </button>
              {register_error && (
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "1rem",
                    color: "red",
                  }}
                >
                  {register_error?.data?.message}
                </span>
              )}

              {register_success && (
                <span
                  style={{
                    display: "inline-block",
                    color: "green",
                  }}
                >
                  {register_success}
                </span>
              )}
            </div>
          </Form>
        </Formik>
      </fieldset>
    </div>
  );
}

export default Register;
