import { useMutation } from "@tanstack/react-query";
import { authenticateUser, getUserInfo, registerUser } from "./auth.api.ts";

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

export const useUserInfo = (userId: number) => {
  return useMutation({
    mutationKey: ["userInfo", userId],
    mutationFn: () => getUserInfo(userId),
  });
};
