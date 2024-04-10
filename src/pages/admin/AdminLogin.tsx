import { useInputValidation } from "6pp";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigate } from "react-router-dom";
const isAdmin=true;
const AdminLogin = () => {
    const submitHandler=(e:any)=>{e.preventDegault()};
      const password = useInputValidation("");
    if(isAdmin)return <Navigate to={"/admin/dashboard"} />
  return (
    <div className="grid w-full h-[100vh]">
      {(
        <Card className="w-[350px] h-min self-center place-self-center">
          <CardHeader>
            <CardTitle className="text-align-left">Admin Login</CardTitle>
          </CardHeader>
          <form onSubmit={submitHandler}>
            <CardContent>
              <div className="grid w-full items-center gap-4">

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Secret Key</Label>
                  <Input
                    id="password"
                    placeholder="Secret Key"
                    value={password.value}
                    type="password"
                    onChange={password.changeHandler}
                  />
                </div>
              </div>
              
            </CardContent>
            <CardFooter className="">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) }
    </div>
  );
}

export default AdminLogin
