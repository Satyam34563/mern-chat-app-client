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
import { useState } from "react";
import { useFileHandler, useInputValidation } from "6pp";
import { LucideCamera } from "lucide-react";
import { usernameValidator } from "../utils/validators.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

type Props = {};

function Login({}: Props) {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const cpassword = useInputValidation("");
  const avatar = useFileHandler("single");
  const handleSignin=()=>{};
  const handleSignup = () => {};
  return (
    <div className="grid w-full h-[100vh]">
      {!isLogin ? (
        <Card className="w-[350px] h-min self-center place-self-center">
          <CardHeader>
            <CardTitle className="text-align-left">Login</CardTitle>
          </CardHeader>
          <form onSubmit={handleSignin}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={username.value}
                    placeholder="Username"
                    onChange={username.changeHandler}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    value={password.value}
                    type="password"
                    onChange={password.changeHandler}
                  />
                </div>
              </div>
              <Button variant="link" onClick={toggleLogin}>
                Register new user
              </Button>
            </CardContent>
            <CardFooter className="">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="w-[350px] h-min self-center place-self-center">
          <CardHeader>
            <CardTitle className="text-align-left">Register</CardTitle>
          </CardHeader>
          <form onSubmit={handleSignup}>
            <div className="relative w-[6rem] p-2 left-[35%]">
              <Avatar className="rounded-full w-[6rem] h-[6rem]">
                <AvatarImage
                  src={avatar.preview ? avatar.preview : ""}
                  alt="@avatar"
                />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              {/* {avatar.preview ? (
                <img src={avatar.preview} className="w-[5rem]" alt="" />
              ) : (
                <img src={Profile} className="w-[5rem]" alt="" />
              )} */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-1 right-0"
              >
                <LucideCamera className="h-6 w-6" />
                <Input
                  type="file"
                  onChange={avatar.changeHandler}
                  className="hover:bg-transparent"
                  style={{
                    border: 0,
                    // clip: "rect(0 0 0 0)",
                    // height: 1,
                    margin: -1,
                    overflow: "hidden",
                    padding: "0",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    background: "transparent",
                    textDecorationColor: "transparent",
                    // width: 1,
                  }}
                />
              </Button>
              {avatar.error && <Label className="error">{avatar.error}</Label>}
            </div>

            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    id="name"
                    value={name.value}
                    placeholder="Name"
                    onChange={name.changeHandler}
                    required
                  />
                  <Label htmlFor="username">Username*</Label>
                  <Input
                    id="username"
                    value={username.value}
                    placeholder="Username"
                    onChange={username.changeHandler}
                    required
                  />
                  {username.error && (
                    <Label className="error" htmlFor="username">
                      {username.error}
                    </Label>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bio">Bio*</Label>
                  <Input
                    id="bio"
                    value={bio.value}
                    onChange={bio.changeHandler}
                    placeholder="Bio"
                    required
                  />
                  <Label htmlFor="password">Password*</Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    value={password.value}
                    type="password"
                    onChange={password.changeHandler}
                    required
                  />
                  {password.error && (
                    <Label className="error" htmlFor="password">
                      {password.error}
                    </Label>
                  )}
                  <Label htmlFor="Cpassword">Confirm Password*</Label>
                  <Input
                    id="Cpassword"
                    placeholder="Password"
                    value={cpassword.value}
                    onChange={cpassword.changeHandler}
                    required
                  />
                </div>
              </div>
              <Button variant="link" onClick={toggleLogin}>
                Already Registered? SignIn
              </Button>
            </CardContent>
            <CardFooter className="">
              <Button type="submit" className="w-full">
                Register
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}

export default Login;
