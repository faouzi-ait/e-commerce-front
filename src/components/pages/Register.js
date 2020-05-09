import React from "react";
import Header from "../ui-elements/Header";
import { useSelector, useDispatch } from "react-redux";
import { register_user } from "../../redux/features/registration/action";
import { reduxForm } from "redux-form";
import FormInput from "../ui-elements/ReduxFormInput";

function Register({ handleSubmit, history }) {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.form);
  const register_error = useSelector(
    (state) => state.registration_reducer.errorMessage.response
  );
  const register_success = useSelector(
    (state) => state.registration_reducer.user.message
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
            history.push("/login");
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
            <h2>Register your new account for full access:</h2>
            {register_error && (
              <div style={{ textAlign: "center" }}>
                {register_error.data.message}
              </div>
            )}

            {register_success && (
              <div style={{ textAlign: "center" }}>{register_success}</div>
            )}

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
            <button>register</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default reduxForm({ form: "register" })(Register);
