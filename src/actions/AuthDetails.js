import { EMAIL, AUTHENTICATION } from "./ActionTypes";

export const Email = (email) => ({
  type: EMAIL,
  email,
});
export const Authentication = (bool) => ({
  type: AUTHENTICATION,
  bool,
});
