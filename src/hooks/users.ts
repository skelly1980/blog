import { useEffect, useState } from 'react';
import { createUser, getUser, signInUser } from '../api/users';
import { User, CreateUserRequest, SignInRequest, SignInResponse } from "../types/user";

export const useUsersStore = () => {
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

        const signIn = async (credentials: SignInRequest): Promise<SignInResponse> => {
          try {
            return await signInUser(credentials);
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
