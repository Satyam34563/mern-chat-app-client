import { Grid } from "@mui/material";
import Title from "../Shared/Title";
import { Header } from "./Header";
import ChatList from "../specific/ChatList";
import { samplechats } from "@/constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent: React.ComponentType) => {
  return () => {
    const params = useParams();
    const chatId = params.chatId;
    return (
      <div>
        <Title title="Chat App" description="Description" />
        <Header />

        <Grid container height={"calc(100vh-4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <ChatList chats={samplechats} chatId={chatId} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            lg={9}
            height={"calc(94vh)"}
          >
            {<WrappedComponent />}
          </Grid>
          {/* <Grid
            item
            xs={4}
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
            height={"100%"}
          >
            Third
          </Grid> */}
        </Grid>
      </div>
    );
  };
};
export default AppLayout;
