export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  auth: {
    userId: number;
  };
}

export interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  register: {
    isUserRegistered: boolean;
  };
}

interface FormInputError {
  isError: boolean;
  message?: string;
}

interface FormInput {
  value: string;
  error: FormInputError;
}

export interface LoginFormState {
  email: FormInput;
  password: FormInput;
}

export interface RegisterFormState {
  firstName: FormInput;
  lastName: FormInput;
  email: FormInput;
  password: FormInput;
}
