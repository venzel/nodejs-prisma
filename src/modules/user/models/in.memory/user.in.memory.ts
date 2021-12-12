import { IUser } from '@modules/user/models/user';

class UserInMemory implements IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export { UserInMemory };
