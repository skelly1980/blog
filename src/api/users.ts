import { CreateUserRequest, SignInRequest, SignInResponse, User } from "../types/user";

export const createUser = async (createUserRequest: CreateUserRequest): Promise<User> => {
    const response = await fetch("http://localhost:3000/api/users", 
        {
            method: "post", 
            body: JSON.stringify(createUserRequest),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const user = await response.json();
    
    console.log(user)
    return user;
};

export const getUser = async (): Promise<User[]> => {
    const response = await fetch("http://localhost:3000/api/users/", {method: "get"});
    const data = await response.json();
    return data;
};

export const signInUser = async (signInRequest: SignInRequest): Promise<SignInResponse> => {
    try {
        const response = await fetch("http://localhost:3000/api/users/signin", 
        {
            method: "POST", 
            body: JSON.stringify(signInRequest),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
      const errBody = await response.json().catch(() => null);
      const message = errBody?.message ?? `Request failed: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data as SignInResponse;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
}


