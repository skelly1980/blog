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
    const response = await fetch("http://localhost:3000/api/users/signin", 
        {
            method: "POST", 
            body: JSON.stringify(signInRequest),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const data = await response.json();
    console.log(data);
    return data;
}


