import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import LoaderReducer from "./LoaderReducer";

export default combineReducers({ Loader: LoaderReducer, Auth: AuthReducer });
