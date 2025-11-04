import { Dialog } from "../Dialog";
import { useState } from "react";
import { Register } from "./Register";
import { SignIn } from "./SignIn";
import { CreateUserRequest, SignInRequest } from "../../types/user";
import { usersStore } from "../../hooks/users";

type Props = {
  toggleSignUp: (event: React.MouseEvent) => void;
};
export const Signup = (props: Props) => {
  const [mode, setMode] = useState<"Sign In" | "Register">("Sign In");
  const { createUser, signIn } = usersStore();

  const handleSetMode = () => {
    setMode(mode === "Sign In" ? "Register" : "Sign In")
  }

  const handleSignIn = async (credentials: SignInRequest) => {
    if (signIn) {
      const response = await signIn(credentials);
      if (response.success) {
        console.log("User signed in:", response.user);
        // Could show a success message or close dialog
        // props.toggleSignUp(); // Optionally close the dialog
      }
    }
  }

  const handleCreateUser = (user: CreateUserRequest) => {
    if (createUser) {
      createUser(user);
    }
  }

  return (
    <Dialog toggleDialog={props.toggleSignUp}>
      { mode === "Sign In" ? 
      <SignIn onToggleMode={handleSetMode} signInUser={handleSignIn} /> : 
      <Register onToggleMode={handleSetMode} createUser={handleCreateUser} />}
    </Dialog>
  );


  // return (
  //   <Dialog toggleDialog={props.toggleSignUp}>
  //     { mode === "Sign In" ? 
  //     <SignIn onToggleMode={handleSetMode} getUser={getUser} /> : 
  //     <Register onToggleMode={handleSetMode} createUser={createUser}/>}
  //   </Dialog>
  // );
};
