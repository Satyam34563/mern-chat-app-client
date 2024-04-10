import { Avatar, ListItem, Stack } from "@mui/material";
import { Plus, Minus } from "lucide-react";
import { memo } from "react";
import { Button } from "../ui/button";
type props = {
  user: any;
  handler: Function;
  handlerIsLoading?: boolean;
  isAdded?:boolean,
  styling?:any
};
const UserItem = ({ user, handler, handlerIsLoading, isAdded=false, styling={} }: props) => {
  const { name, id, avatar } = user;
  return (
    <div>
      <ListItem sx={{ paddingLeft: "0", paddingRight: "0" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
          {...styling}
        >
          <Avatar />
          <h4 style={{ width: "70%" }}>{name}</h4>
          <Button
            onClick={() => handler(id)}
            disabled={handlerIsLoading}
            variant={isAdded ? "destructive" : "outline"}
            size={"icon"}
          >
            {isAdded ? <Minus /> : <Plus />}
          </Button>
        </Stack>
      </ListItem>
    </div>
  );
};

export default memo(UserItem);
