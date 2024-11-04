import { useQuery } from "@tanstack/react-query";
import { authenticateUser, registerUser } from "./auth.api.ts";
import { LoginProps, RegisterProps } from "./auth.types.ts";

export const useRegisterUser = (props: RegisterProps) =>
  useQuery({
    queryKey: ["registerUser", props],
    queryFn: () => {
      if (
        props.firstName &&
        props.lastName &&
        props.email &&
        props.password &&
        props.isSubmitted
      ) {
        return registerUser(props);
      }
    },
  });
export const useAuthenticateUser = (props: LoginProps) =>
  useQuery({
    queryKey: ["authenticateUser", props],
    queryFn: () => authenticateUser(props),
    enabled: false,
  });
