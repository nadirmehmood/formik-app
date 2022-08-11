import React from "react";
import { ErrorMessage, useField } from "formik";
import "./App.css";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="row">
      <div className="col-md-4  mb-2">
        <label htmlFor={field.name}>{label}</label>
        <input
          className={`form-control  ${
            meta.touched && meta.error && "is-invalid"
          }`}
          autoComplete="off"
          {...field}
          {...props}
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    </div>
  );
};

export default TextField;
