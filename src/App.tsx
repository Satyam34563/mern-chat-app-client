import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectRoute from "./components/Auth/ProtectRoute";
import { LayoutLoader } from "./components/layout/Loaders";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessageManegement = lazy(() => import("./pages/admin/MessageManegement"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
let user = true;
function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <LayoutLoader />
          </div>
        }
      >
        <Routes>
          <Route element={<ProtectRoute user={user} redirect="/" />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/* <ProtectRoute user={!user} redirect="/"><Login/></ProtectRoute> */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/admin/chats-management" element={<ChatManagement />} />
          <Route path="/admin/messages" element={<MessageManegement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
