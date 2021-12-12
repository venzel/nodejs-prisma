import { UserRepositoryInMemory } from '@modules/user/repositories/in.memory/user.repository.in.memory';
import { IUserRepository } from '@modules/user/repositories/user.repository';
import { RegisterUserService } from './register.user.service';

let userRepositoryInMemory: IUserRepository;
let registerUserService: RegisterUserService;

describe('RegisterUserService', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        registerUserService = new RegisterUserService(userRepositoryInMemory);
    });

    // TEST 1

    it('should be register a new user', async () => {
        const user = await registerUserService.execute({
            name: 'tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('password');
    });

    // TEST 2

    it('should be not register a new user', async () => {
        await registerUserService.execute({
            name: 'tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        await expect(
            registerUserService.execute({
                name: 'tiago',
                email: 'tiago@gmail.com',
                password: 'penadepato',
            })
        ).rejects.toBeInstanceOf(Error);
    });
});
