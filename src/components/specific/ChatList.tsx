import { Stack } from "@mui/material";
import ChatItem from "../Shared/ChatItem";

type props = {
  w?: string;
  chats: any;
  onlineUsers?: any;
  newMessageAlert?: any;
  handleDeleteChat?: Function;
  chatId?:string
};
const ChatList = ({
  w="100%",
  chats,
  onlineUsers,
  newMessageAlert,
  handleDeleteChat,
  chatId
}: props) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height="93vh"  className="px-0">
      {chats?.map((d: any) => {
        return (
          <ChatItem
            avatar={d.avatar}
            name={d.name}
            id={d.id}
            groupChat={d.groupChat}
            sameSender={chatId === d.id}
            isOnline={d.isOnline}
            newMessageAlert={""}
            handleDeleteChatOpen={""}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
