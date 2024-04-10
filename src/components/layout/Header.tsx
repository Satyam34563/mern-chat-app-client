import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Logout } from "../specific/Logout";
import { NewGroup } from "../specific/NewGroup";
import { Notification } from "../specific/Notification";
import { Search as Searchs } from "../specific/Search";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const navigateToGroup = () => {
    navigate("/groups");
  };
  return (
    <div className="flex justify-between h-12 border">
      <div className=" font-bold p-3">
        <h1>Chat App</h1>
      </div>
      <div className=" p-2">
        <Button variant="ghost" size="icon">
          <Searchs />
        </Button>
        <Button variant="ghost" size="icon">
          <NewGroup />
        </Button>
        <Button variant="ghost" size="icon" onClick={navigateToGroup}>
          <Users className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Notification />
        </Button>
        <Logout />
      </div>
    </div>
  );
}
