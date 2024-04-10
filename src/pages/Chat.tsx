import FileMenu from "@/components/Dialogs/FileMenu";
import MessageComponent from "@/components/Shared/MessageComponent";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sampleMessage } from "@/constants/sampleData";
import { Stack } from "@mui/material";
import { Paperclip, SendHorizontal } from "lucide-react";
import { useRef } from "react";
const user = {
  _id: "adsdsd",
  name: "Satyam Suman",
};
function Chat() {
  const containerRef = useRef(null);
  return (
    <>
      <div className="h-[99%]">
        <Stack
          ref={containerRef}
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "91%",
          }}
          padding={"1rem"}
        >
          {sampleMessage.map((i) => (
            <MessageComponent message={i} user={user} />
          ))}
          <FileMenu />
        </Stack>
        <form action="" style={{ height: "10%" }}>
          <Stack
            direction={"row"}
            height={"100%"}
            padding={"1rem"}
            alignItems={"center"}
            position={"relative"}
          >
            <Button
              style={{ position: "absolute", left: "1.5rem" }}
              size={"icon"}
              variant={"ghost"}
            >
              <Paperclip size={"20"} />
            </Button>
            <Input
              style={{ paddingInline: "3rem" }}
              placeholder="Type your message here..."
            />
            <Button type="submit" size={"icon"} style={{ marginLeft: "1rem" }}>
              <SendHorizontal size={"20"} />
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}

export default AppLayout()(Chat);
