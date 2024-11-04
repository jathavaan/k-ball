import { useAuthenticateUser, useRegisterUser } from "./auth.query.ts";
import { LoginProps, RegisterProps } from "./auth.types.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useLogin = (props: LoginProps) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useAuthenticateUser(props);

  if (data) {
    localStorage.setItem("token", String(data));
    navigate("/project2/players");
  }

  return { data, error, isLoading };
};

export const useRegister = (props: RegisterProps) => {
  const [data, setData] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { refetch } = useRegisterUser(props);

  const handleRegister = async () => {
    setIsLoading(true);
    const result = await refetch();
    if (result.data) {
      setData(result.data.valueOf);
    } else if (result.error) {
      setError(result.error);
    } else if (result.isLoading) {
      setIsLoading(result.isLoading);
    }
    setIsLoading(false);
  };

  return { handleRegister, data, error, isLoading };
};
