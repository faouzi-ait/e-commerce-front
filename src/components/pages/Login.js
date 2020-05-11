import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { login_user } from "../../redux/features/login/action";

import LoginHeader from "../ui-elements/LoginHeader";

function Login({ handleSubmit, history }) {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.form);

  const onSubmit = (e) => {
    const { email, password } = fields.login.values;
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <LoginHeader msg="If you are an existing client, login with your email and password:" />
          <label htmlFor="email">Email: </label>
          <Field
            name="email"
            id="email"
            type="email"
            component="input"
            placeholder="Type in your email"
            autoComplete="off"
          />

          <label htmlFor="password">Password: </label>
          <Field
            name="password"
            id="password"
            type="password"
            component="input"
            placeholder="Type in your password"
            autoComplete="off"
          />
          <button>login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default reduxForm({ form: "login" })(Login);
