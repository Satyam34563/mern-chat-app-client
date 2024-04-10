import UserItem from "@/components/Shared/UserItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sampleUsers, samplechats } from "@/constants/sampleData";
import { Avatar, Backdrop, Drawer, Grid, Stack, Tooltip } from "@mui/material";
import { ArrowLeft, Check, Edit, Menu, Plus } from "lucide-react";
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const ConfirmDeleteDialog = lazy(
  () => import("../components/Dialogs/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(
  () => import("../components/Dialogs/AddMemberDialog")
);
const isAddMember = false;
function Groups() {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdated, setGroupNameUpdated] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => setIsMobileMenuOpen(false);
  const updateGroupNameHandler = () => {
    setIsEdit(false);
  };
  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };
  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };
  const openAddMemberHandler = () => {};
  useEffect(() => {
    if(chatId){
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdated(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdated("");
      setIsEdit(false);
    };
  }, [chatId]);
  const deleteGroupHandler = () => {};
  const removeMemberHandler=()=>{};
  const IconBtn = (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="fixed right-[1rem]"
        onClick={handleMobile}
      >
        <Menu />
      </Button>
      <Tooltip title="back">
        <Button
          size="icon"
          variant="ghost"
          className="absolute left-[2rem]"
          onClick={navigateBack}
        >
          <ArrowLeft />
        </Button>
      </Tooltip>
    </>
  );
  const GrpName = (
    <Stack direction={"row"} spacing={"1rem"}>
      {isEdit ? (
        <>
          <Input
            value={groupNameUpdated}
            onChange={(e) => setGroupNameUpdated(e.target.value)}
          />
          <Button
            onClick={updateGroupNameHandler}
            style={{ paddingBottom: "0.5rem" }}
            size="icon"
            variant={"ghost"}
          >
            <Check size={"20"} />
          </Button>
        </>
      ) : (
        <>
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            {groupName}
          </h4>
          <Button
            style={{ paddingBottom: "0.5rem" }}
            size="icon"
            variant={"ghost"}
            onClick={() => setIsEdit(true)}
          >
            <Edit size={"20"} />
          </Button>
        </>
      )}
    </Stack>
  );
  const ButtonGrp = (
    <Stack direction={{ sm: "row", xs: "column-reverse" }} spacing={"1rem"}>
      <Button onClick={confirmDeleteHandler} variant={"destructive"}>
        Delete Group
      </Button>
      <Button onClick={openAddMemberHandler}>
        <Plus />
        Add Member
      </Button>
    </Stack>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={3}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight p-[1rem]">
          Groups
        </h3>
        <div style={{}} className="w-[100%]">
          <GroupList chatId={chatId} myGroups={samplechats} />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: "1rem 3rem",
          alignItems: "center",
        }}
      >
        {IconBtn}
        {groupName && (
          <>
            {GrpName}
            <h3 className="my-[2rem]">Members</h3>
            <Stack
              maxWidth={"45rem"}
              width={{xs:"100%", sm:"90%", md:"60%"}}
              boxSizing={"border-box"}
              spacing={"2rem"}
              height={"60vh"}
              overflow={"auto"}
            >
              {
                sampleUsers.map((i)=><UserItem user={i} key={i.id} isAdded handler={removeMemberHandler} styling={{padding:"0rem 2rem"}}/>)
              }
            </Stack>
            {ButtonGrp}
          </>
        )}
      </Grid>
      {isAddMember && <Suspense fallback={<Backdrop open />}><AddMemberDialog/></Suspense>}
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteGroupHandler}
          />
        </Suspense>
      )}
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList chatId={chatId} myGroups={samplechats} />
      </Drawer>
    </Grid>
  );
}
type props = {
  w?: any;
  myGroups?: any;
  chatId: any;
};
const GroupList = ({ w = "100%", myGroups = [], chatId }: props) => (
  <Stack height={"93vh"} overflow={"auto"}>
    {myGroups.length > 0 ? (
      myGroups.map((group: any) => {
        return <GroupListItem group={group} chatId={chatId} />;
      })
    ) : (
      <h4>No Groups Found</h4>
    )}
  </Stack>
);
const GroupListItem = memo(({ group, chatId }: any) => {
  const { name, avatar, id } = group;
  return (
    <Link
      to={`?group=${id}`}
      onClick={(e) => {
        if (chatId === id) e.preventDefault;
      }}
    >
      <div className=" flex items-center space-x-4 border p-4 hover:bg-accent">
        <Avatar src={avatar} />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">
            Send notifications to device.
          </p>
        </div>
      </div>
    </Link>
  );
});
export default Groups;
