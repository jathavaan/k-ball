import { useMutation } from "@tanstack/react-query";
import { authenticateUser, registerUser } from "./auth.api.ts";

export const useRegisterUser = () =>
  useMutation({
    mutationFn: registerUser,
    gcTime: 0,
  });

export const useAuthenticateUser = () =>
  useMutation({
    mutationFn: authenticateUser,
    gcTime: 0,
  });
