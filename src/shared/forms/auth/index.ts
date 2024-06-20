export type LoginForm = {
    email: string;
    password: string;
};

export type SignupForm = {
    username: string;
    email: string;
    password: string;
    pfp?: string;
};

export type GoogleLoginForm = {
    googleUsername: string;
    email: string;
    pfp: string;
};
