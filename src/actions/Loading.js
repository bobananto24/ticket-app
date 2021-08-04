import { LOADING } from "./ActionTypes";

export const Loading = (bool) => ({
  type: LOADING,
  bool,
});
