import { Input } from "../input/input";

type Props = {};

export const SignIn = (props: Props) => {
  return (
    <>
      <h3 className="text-white text-4xl">Sign Up</h3>
      <Input type="primary" placeholder="Email..." />
      <Input type="primary" placeholder="Password..." />
    </>
  );
};
