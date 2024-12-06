import { useAuthenticateUser, useRegisterUser } from "./auth.query.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store.ts";
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
import React from "react";

export const useLogin = () => {
  const email = useSelector(loginEmailSelector);
  const password = useSelector(loginPasswordSelector);

  const { mutate, data, isPending, error } = useAuthenticateUser();

  const isLoginButtonDisabled =
    email.error.isError ||
    password.error.isError ||
    isPending ||
    !email.value ||
    !password.value;

  if (typeof data === "number" && data > 0) {
    localStorage.setItem("token", String(data));
  }

  const onLoginClick = () => {
    mutate({ email: email.value, password: password.value });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !isLoginButtonDisabled) {
      onLoginClick();
    }
  };

  return {
    onLoginClick,
    handleKeyDown,
    isLoginButtonDisabled,
    data,
    error,
    isPending,
  };
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

  const {
    mutate: registerUser,
    data: registerData,
    isPending,
    error,
  } = useRegisterUser();
  const { mutate: authenticateUser } = useAuthenticateUser();

  const isRegisterButtonDisabled =
    firstName.error.isError ||
    lastName.error.isError ||
    email.error.isError ||
    password.error.isError ||
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !password.value ||
    isPending;

  const onRegisterClick = (
    userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    onSuccessLogin: () => void,
  ) => {
    registerUser(userData, {
      onSuccess: (isNewUser) => {
        if (typeof isNewUser === "boolean" && isNewUser) {
          authenticateUser(
            { email: userData.email, password: userData.password },
            {
              onSuccess: (authData) => {
                if (authData) {
                  localStorage.setItem("token", String(authData));
                  onSuccessLogin();
                }
              },
            },
          );
        }
      },
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    onSuccessLogin: () => void,
  ) => {
    if (event.key === "Enter" && !isRegisterButtonDisabled) {
      onRegisterClick(
        {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        },
        () => {
          authenticateUser(
            { email: userData.email, password: userData.password },
            {
              onSuccess: (authData) => {
                if (authData) {
                  localStorage.setItem("token", String(authData));
                  onSuccessLogin();
                }
              },
            },
          );
        },
      );
    }
  };

  return {
    onRegisterClick,
    handleKeyDown,
    isRegisterButtonDisabled,
    registerData,
    error,
    isPending,
  };
};

export const useRegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleFirstNameChange = (value: string) => {
    dispatch(setRegisterFirstName(value));

    if (!value) {
      dispatch(setRegisterFirstNameError("First name is required"));
      return;
    }

    if (value !== value.trim()) {
      dispatch(
        setRegisterFirstNameError(
          "First name cannot begin or end with a whitespace",
        ),
      );
      return;
    }

    const nameRegex = /^[A-Za-zÆØÅæøå]+(?: [A-Za-zÆØÅæøå]+)*$/;
    if (!nameRegex.test(value)) {
      dispatch(
        setRegisterFirstNameError("First name can only contain letters"),
      );
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

    if (value !== value.trim()) {
      dispatch(
        setRegisterLastNameError(
          "Last name cannot begin or end with a whitespace",
        ),
      );
      return;
    }

    const nameRegex = /^[A-Za-zÆØÅæøå]+(?: [A-Za-zÆØÅæøå]+)*$/;
    if (!nameRegex.test(value)) {
      dispatch(setRegisterLastNameError("Last name can only contain letters"));
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
