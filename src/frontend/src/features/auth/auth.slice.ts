import { LoginFormState, RegisterFormState } from "./auth.types.ts";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialLoginFormState: LoginFormState = {
  email: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
  password: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
};

const initialRegisterFormState: RegisterFormState = {
  firstName: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
  lastName: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
  email: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
  password: {
    value: "",
    error: {
      isError: false,
      message: undefined,
    },
  },
};

const loginFormSlice = createSlice({
  name: "loginForm",
  initialState: initialLoginFormState,
  reducers: {
    setLoginEmail: (state, action) => {
      state.email.value = action.payload;
    },
    setLoginEmailError: (state, action) => {
      if (action.payload) {
        state.email.error.message = action.payload;
        state.email.error.isError = true;
      } else {
        state.email.error.message = undefined;
        state.email.error.isError = false;
      }
    },
    resetLoginEmailError: (state) => {
      state.email.error.message = undefined;
      state.email.error.isError = false;
    },
    setLoginPassword: (state, action) => {
      state.password.value = action.payload;
    },
    setLoginPasswordError: (state, action) => {
      if (action.payload) {
        state.password.error.message = action.payload;
        state.password.error.isError = true;
      } else {
        state.password.error.message = undefined;
        state.password.error.isError = false;
      }
    },
    resetLoginPasswordError: (state) => {
      state.password.error.message = undefined;
      state.password.error.isError = false;
    },
    clearLoginForm: (state) => {
      state.email.value = "";
      state.email.error.isError = false;
      state.email.error.message = undefined;

      state.password.value = "";
      state.password.error.isError = false;
      state.password.error.message = undefined;
    },
  },
});

const registerFormSlice = createSlice({
  name: "registerForm",
  initialState: initialRegisterFormState,
  reducers: {
    setRegisterFirstName: (state, action) => {
      state.firstName.value = action.payload;
    },
    setRegisterFirstNameError: (state, action) => {
      if (action.payload) {
        state.firstName.error.message = action.payload;
        state.firstName.error.isError = true;
      } else {
        state.firstName.error.message = undefined;
        state.firstName.error.isError = false;
      }
    },
    resetRegisterFirstNameError: (state) => {
      state.firstName.error.message = undefined;
      state.firstName.error.isError = false;
    },
    setRegisterLastName: (state, action) => {
      state.lastName.value = action.payload;
    },
    setRegisterLastNameError: (state, action) => {
      if (action.payload) {
        state.lastName.error.message = action.payload;
        state.lastName.error.isError = true;
      } else {
        state.lastName.error.message = undefined;
        state.lastName.error.isError = false;
      }
    },
    resetRegisterLastNameError: (state) => {
      state.lastName.error.message = undefined;
      state.lastName.error.isError = false;
    },
    setRegisterEmail: (state, action) => {
      state.email.value = action.payload;
    },
    setRegisterEmailError: (state, action) => {
      if (action.payload) {
        state.email.error.message = action.payload;
        state.email.error.isError = true;
      } else {
        state.email.error.message = undefined;
        state.email.error.isError = false;
      }
    },
    resetRegisterEmailError: (state) => {
      state.email.error.message = undefined;
      state.email.error.isError = false;
    },
    setRegisterPassword: (state, action) => {
      state.password.value = action.payload;
    },
    setRegisterPasswordError: (state, action) => {
      if (action.payload) {
        state.password.error.message = action.payload;
        state.password.error.isError = true;
      } else {
        state.password.error.message = undefined;
        state.password.error.isError = false;
      }
    },
    resetRegisterPasswordError: (state) => {
      state.password.error.message = undefined;
      state.password.error.isError = false;
    },
    clearRegisterForm: (state) => {
      state.firstName.value = "";
      state.firstName.error.isError = false;
      state.firstName.error.message = undefined;

      state.lastName.value = "";
      state.lastName.error.isError = false;
      state.lastName.error.message = undefined;

      state.email.value = "";
      state.email.error.isError = false;
      state.email.error.message = undefined;

      state.password.value = "";
      state.password.error.isError = false;
      state.password.error.message = undefined;
    },
  },
});

export const {
  setLoginEmail,
  setLoginEmailError,
  resetLoginEmailError,
  setLoginPassword,
  setLoginPasswordError,
  resetLoginPasswordError,
  clearLoginForm,
} = loginFormSlice.actions;

export const {
  setRegisterFirstName,
  setRegisterFirstNameError,
  resetRegisterFirstNameError,
  setRegisterLastName,
  setRegisterLastNameError,
  resetRegisterLastNameError,
  setRegisterEmail,
  setRegisterEmailError,
  resetRegisterEmailError,
  setRegisterPassword,
  setRegisterPasswordError,
  resetRegisterPasswordError,
  clearRegisterForm,
} = registerFormSlice.actions;

export const loginFormReducer = loginFormSlice.reducer;
export const registerFormReducer = registerFormSlice.reducer;

export const loginEmailSelector = (state: RootState) =>
  state.loginFormReducer.email;
export const loginPasswordSelector = (state: RootState) =>
  state.loginFormReducer.password;
export const registerFirstNameSelector = (state: RootState) =>
  state.registerFormReducer.firstName;
export const registerLastNameSelector = (state: RootState) =>
  state.registerFormReducer.lastName;
export const registerEmailSelector = (state: RootState) =>
  state.registerFormReducer.email;
export const registerPasswordSelector = (state: RootState) =>
  state.registerFormReducer.password;
