import {LayoutDashboard, User, LucideGroup, MessageCircle} from "lucide-react"
export const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Users",
    path: "/admin/user-management",
    icon: <User />,
  },
  {
    name: "Chats",
    path: "/admin/chats-management",
    icon: <MessageCircle />,
  },
  {
    name: "Message",
    path: "/admin/messages",
    icon: <LucideGroup />,
  },
];