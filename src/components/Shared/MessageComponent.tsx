import moment from "moment";
import { memo } from "react";
import RenderAttachment from "./RenderAttachment";
type props = {
  message: any;
  user: any;
};
const MessageComponent = ({ message, user }: props) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      className={
        sameSender
          ? " bg-primary max-w-[50vw] my-[0.4rem]"
          : "bg-primary-foreground max-w-[50vw] my-[0.4rem]"
      }
      style={{
        color: sameSender ? "black" : "",
        padding: "0.4rem",
        borderRadius: "5px",
        width: "fit-content",
        alignSelf: sameSender ? "flex-end" : "flex-start",
      }}
    >
      {content && content}

      {attachments.length > 0 && (
        <div className=" mx-12">
          <RenderAttachment attachment={attachments} />
        </div>
      )}

      <p
        className={
          sameSender
            ? "text-xs text-muted text-"
            : "text-xs text-muted-foreground"
        }
      >
        {timeAgo}
      </p>
    </div>
  );
};

export default memo(MessageComponent);
