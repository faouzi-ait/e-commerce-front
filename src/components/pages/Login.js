import React from "react";
import Header from "../ui-elements/Header";
import { useSelector, useDispatch } from "react-redux";
import { login_user } from "../../redux/features/login/action";
import { reduxForm } from "redux-form";
import FormInput from "../ui-elements/ReduxFormInput";

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
    <>
      {" "}
      <Header />
      <div className="registration__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="email">Email: </label>
            <FormInput
              name="email"
              type="email"
              placeholder="Please type in your email"
            />

            <label htmlFor="password">Password: </label>
            <FormInput
              name="password"
              type="password"
              placeholder="Please type in your password"
            />
            <button>login</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default reduxForm({ form: "login" })(Login);
