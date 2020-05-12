import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm } from "redux-form";
import { send_contact_message } from "../../redux/features/contact/action";
import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import FormInput from "../ui-elements/ReduxFormInput";

import LoginHeader from "../ui-elements/LoginHeader";

function Contact({ handleSubmit }) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  //console.log(form);

  const onSubmit = (e) => {
    const { name, lastname, email, message } = form.contact.values;
    console.log(name, lastname, email, message);
    dispatch(send_contact_message({ name, lastname, email, message }));
  };

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="registration__form contact_layout">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <LoginHeader msg="Send us a hello!!" />
            <label htmlFor="name">Name: </label>
            <FormInput
              name="name"
              type="text"
              placeholder="Type in your name"
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

            <label htmlFor="message">Message: </label>
            <FormInput
              name="message"
              type="text"
              placeholder="Type in your message"
            />
            <button>say hi!</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({ form: "contact" })(Contact);
