import { EMAIL, AUTHENTICATION } from "../actions/ActionTypes";

const initialState = {
  email: "",
  isLogged: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.email };
    case AUTHENTICATION:
      return { ...state, isLogged: action.bool };
    default:
      return state;
  }
};
export default AuthReducer;
