import { useState } from "react";
import { Button } from "../buttons/Button";
import { Input } from "../input/input";
import { CreateUserRequest, SignInRequest } from "../../types/user";

type Props = {
  onToggleMode: () => void;
  // getUser: (user: CreateUserRequest) => void;
  signInUser: (credentials: SignInRequest) => Promise<void>;
};

// export const SignIn = ({ onToggleMode, getUser, sigInUser }: Props) => {
//   const [ email, setEmail ] = useState("");
//   const [ password, setPassword ] = useState("");

//   const handleGetUser = () => {
//     getUser({
//       email,
//       password,
//     })
//   }

//   return (
//     <>
//       <h3 className="text-white text-4xl">Sign In</h3>
//       <Input 
//         type="primary" 
//         placeholder="Email..."
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value)
//         }} 
//       />
//       <Input 
//         type="primary" 
//         placeholder="Password..."
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value)
//         }}
//         inputType="password"
//       />
//       <Button onClick={ handleGetUser } type="warning">Sign In</Button>
//       <p className="text-white normal-case">
//         Not a member? <button onClick={ onToggleMode } className="text-blue-400 underline">Register Here</button>
//       </p>
//     </>
//   );
// };
export const SignIn = ({ onToggleMode, signInUser }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");
    try {
      await signInUser({ email, password });
      setSuccessMessage("Sign in successful!");
      // Clear form
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Sign in failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h3 className="text-white text-4xl">Sign In</h3>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <Input 
        type="primary" 
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputType="email"
      />
      <Input 
        type="primary" 
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputType="password"
      />
      <Button onClick={handleSignIn} type="warning" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </Button>
      <p className="text-white normal-case">
        Not a member? <button onClick={onToggleMode} className="text-blue-400 underline">Register Here</button>
      </p>
    </>
  );
};
