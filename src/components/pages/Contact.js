import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { send_contact_message } from "../../redux/features/contact/action";

import FormFieldWrapper from "../ui-elements/FormFieldsWrapper";
import { Formik, Form } from "formik";
import { validationSchemaContact } from "../../utils/utilities";

import Header from "../ui-elements/HeaderDesktop";
import HeaderMobile from "../ui-elements/HeaderMobile";
import LoginHeader from "../ui-elements/LoginHeader";

function Contact() {
  const dispatch = useDispatch();
  const { errorMessage, message } = useSelector((state) => state?.contact);

  const onSubmit = (values, { resetForm }) => {
    const subject = "NEW-STYLE"
    const { firstname, lastname, email, subject, message } = values;
    dispatch(
      send_contact_message({ name: firstname, lastname, email, message })
    );
    resetForm();
  };

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="registration__form contact_layout">
        <fieldset>
          <LoginHeader msg="Send us a hello!!" />

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchemaContact}
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
                forHtml="message"
                label="Message: "
                type="text"
                placeholder="Type in your message"
              />

              <div style={{ display: "flex", alignItems: "center" }}>
                <button type="submit" className="register__btn--screen">
                  send message
                </button>

                {errorMessage && errorMessage.response && (
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: ".5rem",
                      color: "red",
                    }}
                  >
                    An error occured, please try again
                  </span>
                )}

                {message && message.message && (
                  <span
                    style={{
                      display: "inline-block",
                      color: "green",
                    }}
                  >
                    Thank you for your message!!!
                  </span>
                )}
              </div>
            </Form>
          </Formik>
        </fieldset>
      </div>
    </div>
  );
}

export default Contact;
