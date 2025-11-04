import { useEffect, useState } from 'react';
import { createUser, getUser, signInUser } from '../api/users';
import { User, CreateUserRequest, SignInRequest, SignInResponse } from "../types/user";

export const usersStore = () => {
  const [users, setUser] = useState<User[]>([]);
      
      //Calling backend to get blogs
        const getUserData = async () => {
          const users = await getUser();
          setUser(users);
        }
      
        useEffect(() => {
          getUserData();
        }, []);
  
        const create = async (user: CreateUserRequest) => {
          const newUser = await createUser(user);
          setUser([...users, newUser]);
          return newUser;
        }
  
        return {
          users, 
          createUser: create
        };

        const signIn = async (credentials: SignInRequest): Promise<SignInResponse> => {
          try {
            const response = await signInUser(credentials);
            return response;
          } catch (error) {
            console.log("Sign in error;", error);
            throw error;
          }
        }

        return {
          users,
          createUser: create,
          signIn
        }
}
