import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import {
  employeeCreateReducer,
  employeeDeleteReducer,
  employeeUpdateReducer,
  employeeListReducer
  } from "./reducers/employeeReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  googleLoginReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
  employeeList: employeeListReducer,
  userLogin: userLoginReducer,
  // googleLogin: googleLoginReducer,
  userRegister: userRegisterReducer,
  employeeCreate: employeeCreateReducer,
  employeeDelete: employeeDeleteReducer,
  employeeUpdate: employeeUpdateReducer,
  userUpdate: userUpdateReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;