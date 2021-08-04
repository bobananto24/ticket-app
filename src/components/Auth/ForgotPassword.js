import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Email, Loading } from "../../actions";
import { useFormik } from "formik";
import { EmailSchema, Input } from "../../constants";
import { ForgotPass } from "../../utils/API";
import "../../styles/App.css";
import "../../styles/navbar.css";
import { BottomTab } from "../Navbar";
import { TopHeader } from "../Navbar";

const ForgotPassword = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      dispatch(Email(values.email));
      onVerify(values.email);
    },
  });

  const onVerify = async (email) => {
    dispatch(Loading(true));
    var data = {
      email: email,
    };
    let res = await ForgotPass(data);
    if (res.status != 200)
      return dispatch(Loading(false)), alert(res.response.data.message);
    dispatch(Loading(false));
    alert(res.data.message);
    history.push("/reset-password");
  };

  return (
    <>
      <div style={{ backgroundColor: "#161616" }}>
        <TopHeader />
      </div>

      <div className="form-header">Reset Password</div>
      <div className="form-control">
        <form onSubmit={formik.handleSubmit}>
          <p style={{ textAlign: "center" }}>
            To reset your password, please enter your email address or username
            below
          </p>
          <Input
            title="Email"
            type="text"
            {...formik.getFieldProps("email")}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
          <br />

          <div className="single-btn">
            <button className="btn-primary orange btn-single">
              RESET MY PASSWORD
            </button>
          </div>
        </form>
      </div>
      <div className="fixed-bottom-tab">
        <BottomTab />
      </div>
    </>
  );
};
export default ForgotPassword;
