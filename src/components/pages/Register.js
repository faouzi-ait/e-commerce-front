import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { register_user } from "../../redux/features/registration/action";
import { reduxForm } from "redux-form";
import FormInput from "../ui-elements/ReduxFormInput";

import LoginHeader from "../ui-elements/LoginHeader";

function Register({ handleSubmit, history }) {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.form);
  const register_error = useSelector(
    (state) => state.registration.errorMessage.response
  );
  const register_success = useSelector(
    (state) => state.registration.user.message
  );

  const onSubmit = (e) => {
    const { firstname, lastname, email, password } = fields.register.values;
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
  };

  return (
    <div className="registration__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <LoginHeader msg="For new users, create your account for full access here:" />
          <label htmlFor="firstname">Firstname: </label>
          <FormInput
            name="firstname"
            type="text"
            placeholder="Type in your firstname"
          />

          <label htmlFor="lastname">Lastname: </label>
          <FormInput
            name="lastname"
            type="text"
            placeholder="Type in your lastname"
          />

          <label htmlFor="email">Email: </label>
          <FormInput
            name="email"
            type="email"
            placeholder="Type in your email"
          />

          <label htmlFor="password">Password: </label>
          <FormInput
            name="password"
            type="password"
            placeholder="Type in your password"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button>register</button>
            {register_error && (
              <span
                style={{
                  display: "inline-block",
                  marginLeft: ".5rem",
                  color: "red",
                }}
              >
                {register_error.data.message}
              </span>
            )}

            {register_success && (
              <span clasName="login__screen">{register_success}</span>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default reduxForm({ form: "register" })(Register);
