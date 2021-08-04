import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../actions";
import { useFormik } from "formik";
import { Input, ResetSchema } from "../../constants";
import { ResetPass } from "../../utils/API";
import "../../styles/App.css";
import "../../styles/navbar.css";
import { BottomTab } from "../Navbar";
import { TopHeader } from "../Navbar";

const ResetPassword = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useSelector((states) => states.Auth.email);

  const formik = useFormik({
    initialValues: {
      token: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: ResetSchema,
    onSubmit: (values) =>
      handleReset(values.token, values.password, values.password_confirmation),
  });
  const handleReset = async (token, password, password_confirmation) => {
    dispatch(Loading(true));
    console.log("email=>", email);
    console.log("token=>", token);
    console.log("password=>", password);
    console.log("password_confirmation=>", password_confirmation);
    var data = {
      email: email,
      token: token,
      password: password,
      password_confirmation: password_confirmation,
    };
    let res = await ResetPass(data);
    if (res.status != 200)
      return dispatch(Loading(false)), alert(res.response.data.message);
    dispatch(Loading(false));
    alert(res.data.message);
    history.push("/login");
  };

  return (
    <>
      <div style={{ backgroundColor: "#161616" }}>
        <TopHeader />
      </div>

      <div className="form-header">Reset Your Password</div>
      <div className="form-control">
        <form onSubmit={formik.handleSubmit}>
          <p style={{ textAlign: "center" }}>
            To reset your password, please enter your email address or username
            below
          </p>
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
            {...formik.getFieldProps("password_confirmation")}
            errors={formik.errors.password_confirmation}
            touched={formik.touched.password_confirmation}
          />
          <br />
          <Input
            title="Verification Code"
            type="text"
            {...formik.getFieldProps("token")}
            errors={formik.errors.token}
            touched={formik.touched.token}
          />
          <br />

          <div className="single-btn">
            <button className="btn-primary orange btn-single">
              CONFIRM RESET
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
      {/* <div className="fixed-bottom-tab"> */}
      <BottomTab />
      {/* </div> */}
    </>
  );
};
export default ResetPassword;
