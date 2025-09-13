import { IoCloseCircle } from "react-icons/io5";
import { Button } from "../buttons/Button";

type Props = {
  toggleSignUp: (event: React.MouseEvent) => void;
}

export const Signup = (props: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
      <div className="relative bg-black w-full max-w-[450px] p-12 rounded-sm flex items-center justify-center gap-2 flex-col uppercase">
        <div className="absolute -top-4 -right-4 cursor-pointer">
          <IoCloseCircle onClick={props.toggleSignUp} size={30} className="text-white" />
        </div>
        <h3 className="text-white text-4xl">Sign Up</h3>
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="email" placeholder="Email..." />
        <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="password" placeholder="Password..." />
        <Button type="warning">
          Sign In
        </Button>
        <p className="text-white">or</p>
          <Button type="tertiary">
            Register
          </Button>
      </div>
    </div>
  );
};
