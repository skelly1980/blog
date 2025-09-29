import { Button } from "../buttons/Button";
import { Dialog } from "../Dialog";
import { useState } from "react";
import { Register } from "./Register";
import { SignIn } from "./SignIn";

type Props = {
  toggleSignUp: (event: React.MouseEvent) => void;
};
export const Signup = (props: Props) => {
  const [mode, setMode] = useState<"Sign In" | "Register">("Sign In");

  const handleSetMode = () => {
    setMode(mode === "Sign In" ? "Register" : "Sign In")
  }

  return (
    <Dialog toggleDialog={props.toggleSignUp}>
      { mode === "Sign In" ? 
      <SignIn /> : <Register />}
      <Button onClick={()=> {handleSetMode()}} type="warning">Sign In</Button>
      <Button onClick={()=> {handleSetMode()}}  type="tertiary">Register</Button>
    </Dialog>
  );
};
