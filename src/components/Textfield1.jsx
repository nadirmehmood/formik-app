import React from "react";
import { useField } from "formik";

const Textfield1 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  console.log(field);
  return (
    <div className="row">
      <div className="col-md-4">
        <label htmlFor="">{label}</label>
        <input className="form-control" {...field} {...props} />
      </div>
    </div>
  );
};

export default Textfield1;
