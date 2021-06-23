import { User } from './user.type';

export type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: (() => Promise<void>); 
}