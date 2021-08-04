import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Authentication, Loading } from "../../actions";
import { useFormik } from "formik";
import { Input, LoginSchema, validateSchema } from "../../constants";
import { Login } from "../../utils/API";
import "../../styles/App.css";
import "../../styles/navbar.css";
import { BottomTab, TopHeader } from "../Navbar";

const LoginPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const [remember, setRemember] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => handleLogin(values.email, values.password),
  });

  const handleLogin = async (email, password) => {
    setLoad(true)
    var data = {
      email: email,
      password: password,
    };
    let res = await Login(data);
    if (res.status != 200)
      return setLoad(false), alert(res.response.data.message);
    localStorage.setItem("credentials", JSON.stringify(data));
    localStorage.setItem("TOKEN", JSON.stringify(res.data.response));
    localStorage.setItem("isLogged", true);
    remember && localStorage.setItem("remember", true);
    if (res.data.response.user_role == 2)
      return (
        localStorage.setItem("isAdmin", true),
        setLoad(false),
        dispatch(Authentication(true)),
        history.push("/admin/dashboard")
      );

    if (res.data.response.user_role == 3)
      return (
        localStorage.setItem("isAdmin", false),
     (setLoad(false)),
        dispatch(Authentication(true)),
        history.push("/user/dashboard")
      );
    if (res.data.response.user_role == 4) return (setLoad(false)), alert("Wrong Credentials");
  };

  return (
    <>
      <div style={{ backgroundColor: "#161616" }}>
        <TopHeader />
      </div>

      <div className="form-header">Login</div>
      <div className="form-control">
        <form onSubmit={formik.handleSubmit}>
          <Input
            title="Email"
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
          <input
            type="checkbox"
            onClick={() => setRemember((prev) => !prev)}
            className="checkbox"
          />
          <span>Keep me signed in</span>
          {/* </input> */}
          <div className="btn">
            <button className="btn-primary orange">{load ? "LOADING . . .":"LOGIN"}</button>
            <button
              className="btn-primary"
              onClick={() => history.push("/sign-up")}
            >
              REGISTER
            </button>
          </div>
        </form>
        <br />

        <Link className="forgot-btn"  onClick={() => history.push("/forgot-password")}>Forgot Your Password?</Link>
      </div>
      <div className="fixed-bottom-tab">
        <BottomTab />
      </div>
    </>
  );
};
export default LoginPage;
