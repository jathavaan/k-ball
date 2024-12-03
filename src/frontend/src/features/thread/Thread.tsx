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
import { selectIsCommentSectionOpen } from "@features/thread/thread.slice.ts";
import { useThread } from "@features/thread/thread.hooks.ts";
import { Button, Text, TextField } from "@features/ui";

export const Thread = (props: ThreadProps) => {
  const isCommentSectionOpen = useSelector(selectIsCommentSectionOpen);
  const { onCommentSectionClick } = useThread();
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
            color: theme.palette.grey.A400,
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
      <StyledListItemButton onClick={() => onCommentSectionClick()}>
        <StyledListItemTextButton>
          {isCommentSectionOpen
            ? `Hide replies (${props.threadComments.length})`
            : `View replies (${props.threadComments.length})`}
        </StyledListItemTextButton>
      </StyledListItemButton>
      <Collapse in={isCommentSectionOpen} unmountOnExit>
        <List
          sx={{
            margin: 0,
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              padding: "0 0.5rem",
            }}
          >
            <TextField
              placeholder="Share your thoughts..."
              required
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
            <Button text="Post comment" />
          </section>
          {props.threadComments.map((comment) => (
            <ThreadComment
              commentId={comment.commentId}
              timestamp={comment.timestamp}
              email={comment.email}
              content={comment.content}
            />
          ))}
        </List>
      </Collapse>
    </StyledListItem>
  );
};

export const ThreadComment = (props: ThreadCommentProps) => {
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
            color: theme.palette.grey.A400,
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
    </StyledListItem>
  );
};
