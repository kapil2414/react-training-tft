import {
    EMPLOYEE_CREATE_FAIL,
    EMPLOYEE_CREATE_REQUEST,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_DELETE_FAIL,
    EMPLOYEE_DELETE_REQUEST,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_UPDATE_FAIL,
    EMPLOYEE_UPDATE_REQUEST,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_CREATE_RESET,
    EMPLOYEE_DELETE_RESET,
    EMPLOYEE_UPDATE_RESET
} from "../constants/employeeConstants";
import axios from "axios";

export const listEmployees = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPLOYEE_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`http://localhost:5000/api/employee/list`, config);

        dispatch({
            type: EMPLOYEE_LIST_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.error
                ? error.response.data.error
                : error.message;
        dispatch({
            type: EMPLOYEE_LIST_FAIL,
            payload: message,
        });
    }
};

export const createEmployeeAction = (employee) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: EMPLOYEE_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `http://localhost:5000/api/employee/add`,
            employee,
            config
        );

        dispatch({
            type: EMPLOYEE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.error
                ? error.response.data.error
                : error.message;
        dispatch({
            type: EMPLOYEE_CREATE_FAIL,
            payload: message,
        });
    }
};

export const deleteEmployeeAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPLOYEE_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.delete(`http://localhost:5000/api/employee/delete/${id}`, config);

        dispatch({
            type: EMPLOYEE_DELETE_SUCCESS,
            payload: data.data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.error
                ? error.response.data.error
                : error.message;
        dispatch({
            type: EMPLOYEE_DELETE_FAIL,
            payload: message,
        });
    }
};

export const updateEmployeeAction = (employee) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: EMPLOYEE_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { id, ...employeeData } = employee;

        const { data } = await axios.put(
            `http://localhost:5000/api/employee/edit/${id}`,
            { employee: employeeData },
            config
        );

        dispatch({
            type: EMPLOYEE_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.error
                ? error.response.data.error
                : error.message;
        dispatch({
            type: EMPLOYEE_UPDATE_FAIL,
            payload: message,
        });
    }
};

export const resetErrorValuesAction = () => async (dispatch, getState) => {
    dispatch({
        type: EMPLOYEE_CREATE_RESET
    });
    dispatch({
        type: EMPLOYEE_UPDATE_RESET
    });
    dispatch({
        type: EMPLOYEE_DELETE_RESET
    });
}