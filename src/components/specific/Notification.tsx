import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { sampleNotification } from "@/constants/sampleData";
import { Avatar, List, ListItem, Stack } from "@mui/material";
import { Bell } from "lucide-react";
import { memo } from "react";

export function Notification() {
  const addFriendHandler = (id: any) => {
    console.log(id);
  };
  let isLoadingSendFriendReq = false;
//   const [notifications, setUsers] = useState(sampleNotification);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>
        {sampleNotification.length > 0 ? (
          <List sx={{ padding: "0" }}>
            {sampleNotification.map((i) => (
              <NotificationItem
                notification={i}
                handler={friendRequestHandler}
              />
            ))}
          </List>
        ) : (
          "No Notifications"
        )}
      </DialogContent>
    </Dialog>
  );
}
type props = {
    notification:any,
    handler:Function
}
type props2 = {
  id: any;
  accept: boolean;
};
const friendRequestHandler = ({id, accept}:props2) => {console.log(accept)};
const NotificationItem = memo(({notification, handler}:props)=>{
    const {sender, id}=notification;
    const {name, avatar}=sender;
    return (
      <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar />
          <h4
            style={{ width: "70%" }}
          >{`${name} sent you a friend request`}</h4>
          <Button onClick={() => handler(id, true)} >
            Accept
          </Button>
          <Button onClick={() => handler(id, false)} variant={"outline"}>
            Reject
          </Button>
        </Stack>
      </ListItem>
    );
});
