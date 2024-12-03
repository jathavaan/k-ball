import {
  ThreadCommentProps,
  ThreadProps,
} from "@features/thread/thread.types.ts";
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemTextAuthor,
  StyledListItemTextButton,
  StyledListItemTextContent,
  StyledListItemTextTitle,
} from "@features/thread/thread.style.ts";
import { Collapse, List } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useSelector } from "react-redux";
import {
  selectOpenCommentSectionIds,
  selectOpenReplySectionIds,
  selectThreadCommentResponse,
  selectThreadReplies,
} from "@features/thread/thread.slice.ts";
import { useThread, useThreadComment } from "@features/thread/thread.hooks.ts";
import { Button, DenseTextField, ErrorAlert } from "@features/ui";
import MessageIcon from "@mui/icons-material/Message";
import DeleteIcon from "@mui/icons-material/Delete";
import { getLoggedInUser } from "@features/auth";

export const Thread = (props: ThreadProps) => {
  const {
    onCommentSectionClick,
    onReplySectionClick,
    onThreadReplyChange,
    onPostThreadCommentClick,
    onDeleteThreadClick,
    isPostThreadCommentPending,
    isPostThreadCommentError,
    isDeleteThreadPending,
    isDeleteThreadError,
  } = useThread(props.threadId, props.playerId);

  const openCommentSectionIds = useSelector(selectOpenCommentSectionIds);
  const openReplySectionIds = useSelector(selectOpenReplySectionIds);
  const threadReplies = useSelector(selectThreadReplies);
  const threadComments = useSelector(selectThreadCommentResponse);

  return (
    <StyledListItem key={props.threadId}>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <StyledListItemTextAuthor>{props.email}</StyledListItemTextAuthor>
        <FiberManualRecordIcon
          sx={(theme) => ({
            fontSize: "0.5rem",
            color: theme.palette.grey.A200,
            margin: "0 0.5rem",
          })}
        />
        <StyledListItemTextAuthor>
          {Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(props.timestamp))}
        </StyledListItemTextAuthor>
      </section>
      <StyledListItemTextTitle>{props.title}</StyledListItemTextTitle>
      <StyledListItemTextContent>{props.content}</StyledListItemTextContent>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <StyledListItemButton
          onClick={() => onCommentSectionClick(props.threadId)}
        >
          <StyledListItemTextButton>
            {openCommentSectionIds.includes(props.threadId)
              ? "Hide replies"
              : "View replies"}
          </StyledListItemTextButton>
        </StyledListItemButton>
        <StyledListItemButton
          sx={{
            ml: 3,
          }}
          onClick={() => onReplySectionClick(props.threadId)}
        >
          <MessageIcon
            sx={(theme) => ({
              fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
              },
              color: theme.palette.grey.A200,
              mr: 0.3,
            })}
          />
          <StyledListItemTextButton>Reply</StyledListItemTextButton>
        </StyledListItemButton>
        {props.userId === getLoggedInUser() && (
          <StyledListItemButton
            sx={{
              ml: 3,
            }}
            onClick={() => onDeleteThreadClick()}
          >
            <DeleteIcon
              sx={(theme) => ({
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.8rem",
                },
                color: theme.palette.grey.A200,
                mr: 0.3,
              })}
            />
            <StyledListItemTextButton>
              {!isDeleteThreadPending ? "Delete" : "Deleting..."}
            </StyledListItemTextButton>
          </StyledListItemButton>
        )}
      </section>
      {isDeleteThreadError && (
        <ErrorAlert message="Something went wrong when deleting post" />
      )}
      <Collapse
        in={openReplySectionIds.includes(props.threadId)}
        unmountOnExit
        sx={{
          width: "100%",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <DenseTextField
            placeholder="Share your thoughts..."
            required
            multiline
            value={threadReplies[props.threadId]?.value}
            error={threadReplies[props.threadId]?.error.isError}
            helperText={threadReplies[props.threadId]?.error.message}
            onChange={(e) =>
              onThreadReplyChange(props.threadId, e.target.value)
            }
          />
          <Button
            text="Post comment"
            onClick={onPostThreadCommentClick}
            isLoading={isPostThreadCommentPending}
            disabled={
              threadReplies[props.threadId]?.error.isError ||
              !threadReplies[props.threadId]?.value
            }
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              maxWidth: { xs: "100%", md: "11rem" },
              padding: 0,
            }}
          />
          {isPostThreadCommentError && (
            <ErrorAlert
              message="Something went wrong while posting your comment"
              sx={{ mt: 1 }}
            />
          )}
        </section>
      </Collapse>
      <Collapse
        in={openCommentSectionIds.includes(props.threadId)}
        unmountOnExit
      >
        <List
          sx={{
            margin: 0,
          }}
        >
          {threadComments[props.threadId] &&
          threadComments[props.threadId].length > 0 ? (
            threadComments[props.threadId].map((comment) => (
              <ThreadComment
                threadId={props.threadId}
                commentId={comment.id}
                userId={comment.userId}
                timestamp={comment.timestamp}
                email={comment.email}
                content={comment.content}
              />
            ))
          ) : (
            <ThreadComment
              threadId={props.threadId}
              commentId={9999999}
              userId={0}
              email={"K-Ball bot"}
              content={"No comments yet. Be the first to comment!"}
              timestamp={new Date().toISOString()}
            />
          )}
        </List>
      </Collapse>
    </StyledListItem>
  );
};

export const ThreadComment = (props: ThreadCommentProps) => {
  const { onDeleteThreadCommentClick, isDeleteThreadCommentPending } =
    useThreadComment(props.threadId, props.commentId);

  return (
    <StyledListItem
      key={props.commentId}
      sx={{
        flex: "display",
        flexDirection: "column",
        paddingLeft: "0.5rem",
        marginBottom: 0,
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
        }}
      >
        <StyledListItemTextAuthor>{props.email}</StyledListItemTextAuthor>
        <FiberManualRecordIcon
          sx={(theme) => ({
            fontSize: "0.5rem",
            color: theme.palette.grey.A200,
            margin: "0 0.5rem",
          })}
        />
        <StyledListItemTextAuthor>
          {Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(props.timestamp))}
        </StyledListItemTextAuthor>
      </section>
      <StyledListItemTextContent>{props.content}</StyledListItemTextContent>
      {props.userId === getLoggedInUser() && (
        <StyledListItemButton
          sx={{
            ml: 0,
          }}
          onClick={() => onDeleteThreadCommentClick()}
        >
          <DeleteIcon
            sx={(theme) => ({
              fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
              },
              color: theme.palette.grey.A200,
              mr: 0.3,
            })}
          />
          <StyledListItemTextButton>
            {!isDeleteThreadCommentPending ? "Delete" : "Deleting..."}
          </StyledListItemTextButton>
        </StyledListItemButton>
      )}
    </StyledListItem>
  );
};
