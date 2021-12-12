import { PrismaClient } from '@prisma/client';

import { IRegisterUserDTO } from '@modules/user/dtos/register.user.dto';
import { IUserRepository } from '@modules/user/repositories/user.repository';
import { prisma } from '@shared/infra/http/prisma';
import { IUserDTO } from '@modules/user/dtos/user.dto';

class UserPrismaRepository implements IUserRepository {
    private _repository: PrismaClient;

    constructor() {
        this._repository = prisma;
    }

    async create(data: IRegisterUserDTO): Promise<IUserDTO> {
        const { name, email, password } = data;

        const user = {
            name,
            email,
            password,
        };

        const userCreated = await this._repository.user.create({
            data: user,
        });

        return userCreated;
    }

    async findByEmail(email: string): Promise<IUserDTO | undefined> {
        const user = await this._repository.user.findUnique({
            where: {
                email,
            },
            select: {
                name: true,
                email: true,
            },
        });

        return user || undefined;
    }
}

export { UserPrismaRepository };
