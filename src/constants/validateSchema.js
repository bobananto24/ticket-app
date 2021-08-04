import * as Yup from "yup";
export const SignUpSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  firstname: Yup.string().required("Firstname is Required"),
  lastname: Yup.string().required("Lastname is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Password is Required"),
  confirmpassword: Yup.string()
    .required("Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Password is Required"),
});
export const EmailSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
});
export const ResetSchema = Yup.object({
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Password is Required"),
  password_confirmation: Yup.string()
    .required("Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  token: Yup.string().required("Token is Required"),
});
