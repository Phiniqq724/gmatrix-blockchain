import { signIn } from "@junobuild/core-peer";
import { Button } from "./button";

export const Login = () => {
  return <Button onClick={signIn}>Sign in</Button>;
};
