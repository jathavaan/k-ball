import { useMutation, useQuery } from "@tanstack/react-query";
import { authenticateUser, registerUser } from "./auth.api.ts";
import { fetchUserInfo } from "./auth.api.ts";

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

export const useUserInfo = (userId: number) => {
  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => fetchUserInfo(userId),
    enabled: !!userId, // Ensure the query runs only if userId is truthy
  });
};
