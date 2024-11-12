import {
  useAuthenticateUser,
  useRegisterUser,
  useUserInfo,
} from "./auth.query.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store.ts";
import {
  loginEmailSelector,
  loginPasswordSelector,
  registerEmailSelector,
  registerFirstNameSelector,
  registerLastNameSelector,
  registerPasswordSelector,
  resetLoginEmailError,
  resetLoginPasswordError,
  resetRegisterEmailError,
  resetRegisterFirstNameError,
  resetRegisterLastNameError,
  resetRegisterPasswordError,
  setLoginEmail,
  setLoginEmailError,
  setLoginPassword,
  setLoginPasswordError,
  setRegisterEmail,
  setRegisterEmailError,
  setRegisterFirstName,
  setRegisterFirstNameError,
  setRegisterLastName,
  setRegisterLastNameError,
  setRegisterPassword,
  setRegisterPasswordError,
} from "./auth.slice.ts";

export const useLogin = () => {
  const email = useSelector(loginEmailSelector);
  const password = useSelector(loginPasswordSelector);

  const { mutate, data, isPending, error } = useAuthenticateUser();

  if (typeof data === "number") {
    localStorage.setItem("token", String(data));
  }

  const onLoginClick = () => {
    mutate({ email: email.value, password: password.value });
  };

  return { onLoginClick, data, error, isPending };
};

export const useLoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleEmailChange = (value: string) => {
    dispatch(setLoginEmail(value));
    if (!value) {
      dispatch(setLoginEmailError("Email is required"));
      return;
    }

    const regexp = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );

    if (!regexp.test(value)) {
      dispatch(setLoginEmailError("Invalid email"));
      return;
    }

    dispatch(resetLoginEmailError());
  };

  const handlePasswordChange = (value: string) => {
    dispatch(setLoginPassword(value));
    if (!value) {
      dispatch(setLoginPasswordError("Password is required"));
      return;
    }

    dispatch(resetLoginPasswordError());
  };

  return { handleEmailChange, handlePasswordChange };
};

export const useRegister = () => {
  const firstName = useSelector(registerFirstNameSelector);
  const lastName = useSelector(registerLastNameSelector);
  const email = useSelector(registerEmailSelector);
  const password = useSelector(registerPasswordSelector);

  const { mutate, data, isPending, error } = useRegisterUser();

  const onRegisterClick = () => {
    mutate({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    });
  };

  return { onRegisterClick, data, error, isPending };
};

export const useRegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleFirstNameChange = (value: string) => {
    dispatch(setRegisterFirstName(value));

    if (!value) {
      dispatch(setRegisterFirstNameError("First name is required"));
      return;
    }

    const nameRegex = /^[A-Za-zÆØÅæøå]+(?: [A-Za-zÆØÅæøå]+)*$/;
    if (!nameRegex.test(value)) {
      dispatch(setRegisterFirstNameError("Name can only contain letters"));
      return;
    }

    dispatch(resetRegisterFirstNameError());
  };

  const handleLastNameChange = (value: string) => {
    dispatch(setRegisterLastName(value));

    if (!value) {
      dispatch(setRegisterLastNameError("Last name is required"));
      return;
    }

    const nameRegex = /^[A-Za-zÆØÅæøå]+(?: [A-Za-zÆØÅæøå]+)*$/;
    if (!nameRegex.test(value)) {
      dispatch(setRegisterLastNameError("Name can only contain letters"));
      return;
    }

    dispatch(resetRegisterLastNameError());
  };

  const handleEmailChange = (value: string) => {
    dispatch(setRegisterEmail(value));
    if (!value) {
      dispatch(setRegisterEmailError("Email is required"));
      return;
    }

    const regexp = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );

    if (!regexp.test(value)) {
      dispatch(setRegisterEmailError("Invalid email"));
      return;
    }

    dispatch(resetRegisterEmailError());
  };

  const handlePasswordChange = (value: string) => {
    dispatch(setRegisterPassword(value));
    if (!value) {
      dispatch(setRegisterPasswordError("Password is required"));
      return;
    }

    dispatch(resetRegisterPasswordError());
  };

  return {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
  };
};

export const getLoggedInUser = () => {
  const token = localStorage.getItem("token");
  return token ? parseInt(token) : null;
};
export const isUserLoggedIn = () => {
  return getLoggedInUser() !== null;
};

export const logOutUser = () => {
  localStorage.removeItem("token");
};

export const useLoggedInUserInfo = () => {
  const userId = parseInt(localStorage.getItem("userId") || "0");
  return useUserInfo(userId);
};
