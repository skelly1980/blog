export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type CreateUserRequest = {
    name?: string;
    email: string;
    password: string;
}

export type SignInRequest = {
    email: string;
    password: string;
}

export type SignInResponse = {
    user: User;
    success: boolean;
    message?: string;
}