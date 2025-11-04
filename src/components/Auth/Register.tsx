import { CreateUserRequest } from "../../types/user";
import { Button } from "../buttons/Button";
import { Input } from "../input/input";
import { useState } from "react";

type Props = {
  onToggleMode: () => void;
  createUser: (user: CreateUserRequest) => void;
};

export const Register = ({ onToggleMode, createUser }: Props) => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSaver = () => {
    createUser({
      name,
      email,
      password,
    });
  }

  return (
    <>
      <h3 className="text-white text-4xl">Register</h3>
      <Input 
        type="primary" 
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        type="primary" 
        placeholder="Email..." 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
        type="primary" 
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        inputType="password"
      />
      <Button onClick={handleSaver} type="warning">Register</Button>
      <p className="text-white normal-case">
        Already a member? <button onClick={onToggleMode} className="text-blue-400 underline">Sign in Here</button>
      </p>
    </>
  );
};
