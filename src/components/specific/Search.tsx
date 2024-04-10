import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import {useInputValidation} from "6pp";
import UserItem from "../Shared/UserItem";
import { useState } from "react";
import { sampleUsers } from "@/constants/sampleData";
import { List } from "@mui/material";

export function Search() {
    const search = useInputValidation("");
    const addFriendHandler = (id:any) => {console.log(id)};
    let isLoadingSendFriendReq=false;
    const [users, setUsers] = useState(sampleUsers);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Find People</DialogTitle>
          
        </DialogHeader>
        <div className="grid ">
          <div className="grid items-center">
            <Input
              value={search.value}
              onChange={search.changeHandler}
              className="col-span-3"
            />
          </div>
        </div>
        <List sx={{padding:"0"}}>
            {
                users.map((i)=>(
                    <UserItem user={i} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendReq}/>
                ))
            }
        </List>
        
      </DialogContent>
    </Dialog>
  );
}
