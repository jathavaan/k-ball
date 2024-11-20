import { useMutation, useQuery } from "@tanstack/react-query";
import { authenticateUser, registerUser } from "./auth.api.ts";
import { fetchUserInfo } from "./auth.api.ts";

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
  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => fetchUserInfo(userId),
    enabled: !!userId, // Ensure the query runs only if userId is truthy
  });
};
