import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
type Props={
    user:boolean,
    children?:ReactNode,
    redirect:string
};
const ProtectRoute = ({user, children, redirect}:Props) => {
  if(!user) return <Navigate to={redirect}/> 
  return children?children:<Outlet />;
}

export default ProtectRoute
