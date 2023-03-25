import React from "react";
import FormFieldWrapper from "../ui-elements/FormFieldsWrapper";
import { Formik, Form } from "formik";
import { validationSchemaLogin } from "../../utils/utilities";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../redux/features/login/action";

import LoginHeader from "../ui-elements/LoginHeader";

function Login({ history }) {
  const dispatch = useDispatch();
  const register_error = useSelector((state) => state?.login?.errorMessage);

  const onSubmit = (values) => {
    const { email, password } = values;
    dispatch(
      login_user(
        {
          email,
          password,
        },
        () =>
          setTimeout(() => {
            history.push("/dashboard");
          }, 1500)
      )
    );
  };

  return (
    <div className="registration__form">
      <fieldset>
        <LoginHeader msg="Login with your email and password" />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchemaLogin}
          onSubmit={onSubmit}
        >
          <Form>
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
              <button type="submit">Submit</button>
              {register_error.response && (
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "red",
                  }}
                >
                  Login failed, please try again
                </span>
              )}
            </div>
          </Form>
        </Formik>
      </fieldset>
    </div>
  );
}

export default Login;
