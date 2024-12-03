import { useMutation } from "@tanstack/react-query";
import { getThreads, postThread } from "@features/threads/threads.api.ts";

export const usePlayerThreads = (playerId: number) =>
  useMutation({
    mutationKey: ["threads"],
    mutationFn: () => getThreads(playerId),
  });

export const usePostPlayerThread = (
  userId: number,
  playerId: number,
  title: string,
  content: string,
) =>
  useMutation({
    mutationKey: ["postThread"],
    mutationFn: () => postThread(userId, playerId, title, content),
  });
