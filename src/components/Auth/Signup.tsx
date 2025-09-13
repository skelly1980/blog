import { Button } from "../buttons/Button";
import { Dialog } from "../Dialog";
import { useState } from "react";

type Props = {
  toggleSignUp: (event: React.MouseEvent) => void;
};
export const Signup = (props: Props) => {
  const [action, setAction] = useState(!false);

  const handleSetAction = () => {
    setAction(!action)
  }
  return (
    <Dialog toggleDialog={props.toggleSignUp}>
      { action ? 
      <>
        <h3 className="text-white text-4xl">Sign Up</h3>
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="email" placeholder="Email..." />
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="password" placeholder="Password..." />
      </> : <>
        <h3 className="text-white text-4xl">Register</h3>
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Name..." />
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="email" placeholder="Email..." />
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="Password" placeholder="Password..." />
      </>}
      <Button onClick={handleSetAction} type="warning">Sign In</Button>
      <Button onClick={handleSetAction}  type="tertiary">Register</Button>
    </Dialog>
  );
};
