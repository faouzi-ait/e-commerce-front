import React from "react";
import { Field } from "formik";
import FormField from "./FormField";

function FormFieldsWrapper({ forHtml, label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={forHtml}>{label}</label>
      <Field type={type} id={forHtml} name={forHtml}>
        {({ field, form: { touched, errors }, meta }) => (
          <FormField
            field={field}
            touched={touched}
            errors={errors}
            meta={meta}
            type={forHtml}
            placeholder={placeholder}
          />
        )}
      </Field>
    </div>
  );
}

export default FormFieldsWrapper;
