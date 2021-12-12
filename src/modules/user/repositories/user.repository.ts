import { IRegisterUserDTO } from '../dtos/register.user.dto';
import { IUserDTO } from '../dtos/user.dto';

interface IUserRepository {
    create(data: IRegisterUserDTO): Promise<IUserDTO>;

    findByEmail(email: string): Promise<IUserDTO | undefined>;
}

export { IUserRepository };
