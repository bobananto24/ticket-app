import { LOADING } from "../actions/ActionTypes";

const initialState = {
  isLoading: true,
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.bool };
    default:
      return state;
  }
};
export default LoaderReducer;
