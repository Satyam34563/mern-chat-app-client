import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { sampleUsers } from "@/constants/sampleData";
import { Stack } from "@mui/material";
import UserItem from "../Shared/UserItem";
import { useState } from "react";

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}:any) => {
     const [members, setMembers] = useState(sampleUsers);
     const [selectedMembers, setSelectedMembers] = useState<any>([]);
     const selectMemberHandler = (id: string) => {
       setSelectedMembers((prev: any) =>
         prev.includes(id) ? prev.filter((i: any) => i !== id) : [...prev, id]
       );
     };
    const addMemberSubmitHandler=()=>{closeHandler()};
    const closeHandler = () => {
        setMembers([]);
        setSelectedMembers([]);
    };
  return (
    <AlertDialog open onOpenChange={closeHandler}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Member</AlertDialogTitle>
          <Stack>
            {members.length > 0
              ? members.map((i) => (
                  <UserItem
                    user={i}
                    handler={selectMemberHandler}
                    isAdded={selectedMembers.includes(i.id)}
                  />
                ))
              : "No users found"}
          </Stack>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeHandler}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={addMemberSubmitHandler}
            disabled={isLoadingAddMember}
          >
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddMemberDialog
