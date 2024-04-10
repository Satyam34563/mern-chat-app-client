import { useInputValidation } from "6pp";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { sampleUsers } from "@/constants/sampleData";
import { Stack } from "@mui/material";
import { Plus } from "lucide-react";
import { useState } from "react";
import UserItem from "../Shared/UserItem";

export function NewGroup() {
    const groupName = useInputValidation("");

  const submitHandler = ()=>{};
  const [members, setMembers]=useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState<any>([]);
      const selectMemberHandler = (id:string) => {
        setSelectedMembers((prev: any) => prev.includes(id)?prev.filter((i:any)=>i!==id): [...prev, id]);
      };
      console.log(selectedMembers);
      const closeHandler =()=>{};
  //   const [notifications, setUsers] = useState(sampleNotification);
  return (
    <Dialog onOpenChange={closeHandler}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Create new group</DialogTitle>
        </DialogHeader>
        <div className="grid ">
          <div className="grid items-center">
            <Input
              value={groupName.value}
              onChange={groupName.changeHandler}
              className="col-span-3"
              placeholder="Group Name"
            />
          </div>
        </div>
        <p>Members</p>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              handler={selectMemberHandler}
              handlerIsLoading={false}
              isAdded={selectedMembers.includes(i.id)}
            />
          ))}
        </Stack>
        <div className="flex justify-end">
          <Button className="mx-4" variant={"outline"}>
            Reject
          </Button>
          <Button onClick={submitHandler}>Accept</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

