import { injectable, inject } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/user.repository';
import { IRegisterUserDTO } from '@modules/user/dtos/register.user.dto';
import { IUserDTO } from '@modules/user/dtos/user.dto';

@injectable()
class RegisterUserService {
    constructor(@inject('UserRepository') public _userRepository: IUserRepository) {}

    async execute(data: IRegisterUserDTO): Promise<IUserDTO> {
        /* Destructuring data */

        const { email } = data;

        /* Find user by email */

        const existsUser = await this._userRepository.findByEmail(email);

        /* Guard strategy */

        if (existsUser) {
            throw new Error(`User email ${email} already exists in repository`);
        }

        /* Create user */

        const user = await this._userRepository.create(data);

        /* Return user created */

        return user;
    }
}

export { RegisterUserService };
