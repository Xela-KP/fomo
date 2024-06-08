export type User = {
    _id: string;
    username: string | null;
    email: string | null;
    password: string | null;
    profilePicture: string | null;
    bio: string;
    about: string;
    links: string[];
    createdAt: string;
};
