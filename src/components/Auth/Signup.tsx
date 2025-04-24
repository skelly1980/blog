import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

export const Signup = () => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div className="bg-[url(/public/homepage-hero.png)] bg-cover h-[90vh] bg-no-repeat bg-center">
      <div className="container mx-auto h-[90vh] flex items-center justify-center">
          <div className={close ? "hidden" : "relative bg-black w-full max-w-[450px] p-12 rounded-sm flex items-center justify-center gap-2 flex-col uppercase"}>
          <div className="absolute -top-4 -right-4 cursor-pointer">
          <a href="/">
            <IoCloseCircle onClick={handleClose} size={30} className="text-white" />
          </a>
          </div>
            <h3 className="text-white text-4xl">Sign Up</h3>
            <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="email" placeholder="Email..." />
            <input className="border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="Password" placeholder="Password..." />
            <button className="uppercase text-white bg-red-600 hover:bg-red-600/80 w-full py-2 rounded-sm" type="submit">
              Sign In
            </button>
            <p className="text-white">or</p>
            <button className="uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm" type="submit">
              <a href="/register" target="_blank">
                Register
              </a>
            </button>
          </div>
        </div>
      </div>
  );
};
