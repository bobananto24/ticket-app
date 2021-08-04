import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import { Authentication, Loading } from "../actions";
import { AdminPage, HomePage, ProfilePage, UserPage } from "../components";
import {
  ForgotPassword,
  LoginPage,
  ResetPassword,
  SignupPage,
} from "../components/Auth";
import { TopHeader } from "../components/Navbar/TopHeader";
import { LoaderComponent } from "../constants";
import { Login } from "../utils/API";

const Router = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((states) => states.Loader.isLoading);
  useEffect(async () => {
    // document.body.style.margin = 0;
    try {
      const remember = JSON.parse(localStorage.getItem("remember"));
      if (remember) {
        let credentials = JSON.parse(localStorage.getItem("credentials"));
        var data = {
          email: credentials.email,
          password: credentials.password,
        };
        let res = await Login(data);
        if (res.status != 200) return;
        localStorage.setItem("TOKEN", JSON.stringify(res.data.response));
        if (res.data.response.user_role == 2) {
          history.push("/admin/dashboard");
          dispatch(Loading(false));
          dispatch(Authentication(true));
        } else if (res.data.response.user_role == 3) {
          history.push("/user/dashboard");
          dispatch(Loading(false));
          dispatch(Authentication(true));
        }
      }
      dispatch(Loading(false));
    } catch {
      dispatch(Loading(false));
    }
  }, []);

  return isLoading ? (
    <LoaderComponent />
  ) : (
    <Switch>
      {/* PUBLIC ROUTE */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/sign-up" component={SignupPage} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/reset-password" component={ResetPassword} />

      {/* PRIVATE ROUTE */}
      <PrivateRoute exact path="/admin/dashboard" component={AdminPage} />
      <PrivateRoute exact path="/user/dashboard" component={UserPage} />
      <PrivateRoute exact path="/admin/profile" component={ProfilePage} />
      <PrivateRoute exact path="/user/profile" component={ProfilePage} />
    </Switch>
  );
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = JSON.parse(localStorage.getItem("isLogged"));
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default Router;
