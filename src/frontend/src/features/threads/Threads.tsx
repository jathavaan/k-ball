import {
  StyledFormControl,
  StyledList,
} from "@features/threads/threads.style.ts";
import { Thread } from "@features/thread";
import {
  Button,
  DenseTextField,
  ErrorAlert,
  LinearProgressBar,
  Text,
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
      <StyledFormControl>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            text="Interact with the community"
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
        <Text
          text="Share your thoughts, ask questions, or just chat"
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.8rem", md: "1rem" },
            mt: 0.5,
          }}
        />
        <DenseTextField
          required
          placeholder="Title*"
          value={title}
          minRows={4}
          onChange={(e) => handleTitleChange(e.target.value)}
          helperText={titleError.isError ? titleError.message : null}
          error={titleError.isError}
        />
        <DenseTextField
          placeholder="Body*"
          multiline
          required
          value={content}
          helperText={contentError.isError ? contentError.message : null}
          error={contentError.isError}
          onChange={(e) => handleContentChange(e.target.value)}
          sx={{
            maxWidth: "80%",
            marginBottom: "0.8rem",
            "& .MuiOutlinedInput-root": {
              minHeight: "2.5rem",
            },
          }}
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
            maxWidth: { xs: "100%", md: "10rem" },
            padding: 0,
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
              key={thread.id}
              threadId={thread.id}
              userId={thread.userId}
              playerId={playerId}
              email={thread.email}
              title={thread.title}
              content={thread.content}
              commentsCount={thread.commentsCount}
              timestamp={thread.timestamp}
            />
          ))
        )}
      </StyledList>
    </section>
  );
};
