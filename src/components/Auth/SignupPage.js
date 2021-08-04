import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../actions";
import { useFormik } from "formik";
import { Input, SignUpSchema, validateSchema } from "../../constants";
import "../../styles/App.css";
import "../../styles/navbar.css";
import { BottomTab } from "../Navbar";
import { TopHeader } from "../Navbar";
const SignupPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) =>
      handleSignUp(
        values.username,
        values.firstname,
        values.lastname,
        values.email,
        values.password,
        values.confirmpassword
      ),
  });
  const handleSignUp = async (
    username,
    firstname,
    lastname,
    email,
    password,
    confirmpassword
  ) => {
    console.log(username);
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);
    history.push("/login");
  };

  return (
    <>
      <div style={{ backgroundColor: "#161616" }}>
        <TopHeader />
      </div>

      <div className="form-header">Register</div>
      <div className="form-control">
        <form onSubmit={formik.handleSubmit}>
          <Input
            title="Username"
            type="text"
            {...formik.getFieldProps("username")}
            errors={formik.errors.username}
            touched={formik.touched.username}
          />
          <br />
          <Input
            title="First Name"
            type="text"
            {...formik.getFieldProps("firstname")}
            errors={formik.errors.firstname}
            touched={formik.touched.firstname}
          />
          <br />
          <Input
            title="Last Name"
            type="text"
            {...formik.getFieldProps("lastname")}
            errors={formik.errors.lastname}
            touched={formik.touched.lastname}
          />
          <br />
          <Input
            title="Email Address"
            type="text"
            {...formik.getFieldProps("email")}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
          <br />
          <Input
            title="Password"
            type="password"
            {...formik.getFieldProps("password")}
            errors={formik.errors.password}
            touched={formik.touched.password}
          />
          <br />
          <Input
            title="Confirm Password"
            type="password"
            {...formik.getFieldProps("confirmpassword")}
            errors={formik.errors.confirmpassword}
            touched={formik.touched.confirmpassword}
          />
          <br />

          <div className="btn">
            <button className="btn-primary orange">REGISTER</button>
            <button
              className="btn-primary"
              onClick={() => history.push("/login")}
            >
              LOGIN
            </button>
          </div>
        </form>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BottomTab />
    </>
  );
};
export default SignupPage;
