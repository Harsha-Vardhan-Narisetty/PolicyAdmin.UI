export interface LoginResponse{
    userId: string;

    fullName: string;

    email: string;

    role: string;

    token: string;

    expiresAt: Date;
}