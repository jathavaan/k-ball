import { useMutation } from "@tanstack/react-query";
import { authenticateUser, registerUser } from "./auth.api.ts";

export const useRegisterUser = () =>
  useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,
  });

export const useAuthenticateUser = () =>
  useMutation({
    mutationKey: ["authenticateUser"],
    mutationFn: authenticateUser,
  });
