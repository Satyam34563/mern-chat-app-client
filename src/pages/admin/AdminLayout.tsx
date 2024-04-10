import { Button } from '@/components/ui/button';
import { adminTabs } from '@/constants/route';
import { Box, Drawer, Grid, Stack } from '@mui/material';
import { X, Menu, LogOut } from "lucide-react";
import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
const isAdmin=true;
const Sidebar=({w}:any)=>{
  if(!isAdmin) return <Navigate to={"/admin"}/> 
  const location = useLocation();
  const logoutHandler =()=>{};
    return (
      <Stack
        width={w}
        direction={"column"}
        spacing={"1rem"}
        className=" bg-background text-foreground"
        height={"100vh"}
      >
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
          Admin Tabs
        </h3>
        <Stack>
          {adminTabs.map((i) => (
            <Link
              key={i.path}
              to={i.path}
              className={location.pathname === i.path ? "bg-accent" : ""}
            >
              <div className=" flex items-center space-x-4 border p-4 hover:bg-accent">
                <div className="flex-1 space-y-1">
                  <Stack direction={"row"} spacing={"1rem"}>
                    {i.icon}
                    <p className="text-sm font-medium self-center leading-none">
                      {i.name}
                    </p>
                  </Stack>
                </div>
              </div>
            </Link>
          ))}
          <div onClick={logoutHandler} className=" flex items-center space-x-4 border p-4 hover:bg-accent">
            <div className="flex-1 space-y-1">
              <Stack direction={"row"} spacing={"1rem"}>
                <LogOut />
                <p className="text-sm font-medium self-center leading-none">
                  Logout
                </p>
              </Stack>
            </div>
          </div>
        </Stack>
      </Stack>
    );
};
const AdminLayout = ({children}:any) => {
    const [isMobile, setIsMobile]=useState(false);
    const handleMobile=()=>{setIsMobile(!isMobile)};
    const handleClose = () => {
      setIsMobile(!isMobile);
    };
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <Button onClick={handleMobile} size="icon" variant={"ghost"}>
          {isMobile ? <X /> : <Menu />}
        </Button>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w="50vw"/>
      </Drawer>
    </Grid>
  );
}

export default AdminLayout
