import {
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_CREATE_RESET,
  EMPLOYEE_DELETE_RESET,
  EMPLOYEE_UPDATE_RESET

} from "../constants/employeeConstants";

export const employeeListReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const employeeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_REQUEST:
      return { loading: true };
    case EMPLOYEE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case EMPLOYEE_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

export const employeeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case EMPLOYEE_UPDATE_RESET:
      return {};


    default:
      return state;
  }
};