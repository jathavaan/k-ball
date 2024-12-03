import {
  StyledFormControl,
  StyledList,
} from "@features/threads/threads.style.ts";
import { Thread } from "@features/thread";
import {
  Button,
  ErrorAlert,
  LinearProgressBar,
  Text,
  TextField,
  TextFieldLarge,
} from "@features/ui";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useThreads } from "@features/threads/threads.hooks.ts";
import { ThreadsProps } from "@features/threads/threads.types.ts";
import { useSelector } from "react-redux";
import {
  selectThreadContent,
  selectThreadContentError,
  selectThreads,
  selectThreadTitle,
  selectThreadTitleError,
} from "@features/threads/threads.slice.ts";

export const Threads = ({ playerId }: ThreadsProps) => {
  const threads = useSelector(selectThreads);
  const title = useSelector(selectThreadTitle);
  const titleError = useSelector(selectThreadTitleError);
  const content = useSelector(selectThreadContent);
  const contentError = useSelector(selectThreadContentError);

  const {
    isPlayerThreadsPending,
    isPlayerThreadsError,
    isPostThreadPending,
    isPostThreadError,
    onPostThreadClick,
    handleTitleChange,
    handleContentChange,
  } = useThreads(playerId);

  return (
    <section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          text="Interact with other K-Ballers"
          sx={{
            textAlign: "left",
            fontSize: { xs: "1.1rem", md: "1.5rem" },
            mr: 0.5,
          }}
        />
        <SportsSoccerIcon
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
            size: { xs: "1.1rem", md: "1.5rem" },
          })}
        />
      </section>
      <StyledFormControl>
        <Text
          text="Share your thoughts, ask questions, or just chat with other K-Ballers."
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.8rem", md: "1rem" },
            mt: 0.5,
          }}
        />
        <TextField
          required
          placeholder="Title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          helperText={titleError.isError ? titleError.message : null}
          error={titleError.isError}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.contrastText,
            borderRadius: "0.4rem",
            maxWidth: {
              xs: "1000%",
              md: "70%",
            },
            "& .MuiOutlinedInput-root": {
              fontSize: { xs: "0.8rem", md: "1rem" },
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
              "&:focus": {
                outline: "none",
              },
            },
          })}
        />
        <TextFieldLarge
          placeholder="Share your thoughts..."
          required
          value={content}
          helperText={contentError.isError ? contentError.message : null}
          error={contentError.isError}
          onChange={(e) => handleContentChange(e.target.value)}
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.contrastText,
            borderRadius: "0.4rem",
            "& .MuiOutlinedInput-root": {
              fontSize: { xs: "0.8rem", md: "1rem" },
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
              "&:focus": {
                outline: "none",
              },
            },
          })}
        />
        <Button
          text="Post thread"
          onClick={() => onPostThreadClick()}
          isLoading={isPostThreadPending}
          disabled={
            titleError.isError || contentError.isError || !title || !content
          }
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
        />
        {isPostThreadError && (
          <ErrorAlert
            message="Something went wrong while posting thread"
            sx={{
              mt: 1,
            }}
          />
        )}
      </StyledFormControl>
      <StyledList>
        {isPlayerThreadsError ? (
          <ErrorAlert
            message="Something went wrong while loading threads"
            sx={{
              mt: 1,
            }}
          />
        ) : isPlayerThreadsPending ? (
          <LinearProgressBar />
        ) : (
          threads?.map((thread) => (
            <Thread
              threadId={thread.id}
              timestamp={thread.timestamp}
              email={thread.user}
              title={thread.title}
              content={thread.content}
              threadComments={thread.comments.map((comment) => ({
                commentId: comment.id,
                timestamp: comment.timestamp,
                email: comment.user,
                content: comment.content,
              }))}
            />
          ))
        )}
      </StyledList>
    </section>
  );
};
