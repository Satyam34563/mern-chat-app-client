import { memo } from "react";
import { Link } from "react-router-dom";

import {
  CardContent,
} from "@/components/ui/card";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
type props = {
  avatar: any;
  name: string;
  id: string;
  groupChat: boolean;
  sameSender: boolean;
  isOnline: boolean;
  newMessageAlert: string;
  handleDeleteChatOpen: string;
};
const ChatItem = ({
  avatar,
  name,
  id,
  groupChat,
  sameSender,
  isOnline,
  newMessageAlert,
  handleDeleteChatOpen,
}: props) => {
  return (
    <Link to={`/chat/${id}`}>
      <ContextMenu>
        <ContextMenuTrigger>
          <ContextMenuContent className=" w-56">
            <ContextMenuItem inset>
              Mark as unread
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>Pin to top</ContextMenuItem>
            <ContextMenuItem inset>Mute</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset>Archive</ContextMenuItem>
            <ContextMenuItem inset>Clear Messages</ContextMenuItem>
          </ContextMenuContent>
          <CardContent
            className={`grid m-0 p-0 hover:bg-accent ${
              sameSender ? "bg-accent" : ""
            }`}
          >
            <div className=" flex items-center space-x-4 border p-4">
              <Avatar className="rounded-full">
                <AvatarImage src={avatar} alt="@avatar" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              {isOnline && (
                <div className="w-2 h-2 rounded-lg bg-lime-600"></div>
              )}
            </div>
          </CardContent>
        </ContextMenuTrigger>
      </ContextMenu>
    </Link>
  );
};

export default memo(ChatItem);
