import { Formik } from "formik";
import React from "react";
import TextField1 from "./Textfield1";
import * as Yup from "yup";

const SignUp = () => {
  const validation = Yup.object({
    firstName: Yup.string().max(15, "must be 15 or less").required("required"),
  });
  return (
    <Formik
      initialValues={{
        fistName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: "",
      }}
    >
      <>
        <h2 className="my-4 font-weight-bold">SignUp</h2>
        <TextField1 label="First Name" name="firstName" type="text" />
        <TextField1 label="Last Name" name="lastName" type="text" />
        <TextField1 label="Email" name="email" type="email" />
        <TextField1 label="Password" name="password" type="password" />
        <TextField1
          label="Confirm Password"
          name="confirmPass"
          type="password"
        />
      </>
    </Formik>
  );
};

export default SignUp;
