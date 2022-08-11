// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const SignUp = () => {
  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string().max(15, "must be 15 or less").required("Required"),
    email: Yup.string().email("Email is incorrect").required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 or more")
      .required("Required"),
    confirmPass: Yup.string().oneOf(
      ["password", null],
      "confirm password don't match"
    ),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: "",
      }}
      validationSchema={validation}
    >
      {(formik) => (
        <>
          {console.log(formik.values)}
          <Form>
            <h2 className="my-4 font-weight-bold">SignUp</h2>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPass"
              type="password"
            />
            <button className="btn btn-dark mt-4" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-4" type="reset">
              Reset
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default SignUp;
