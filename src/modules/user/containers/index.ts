import { container } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/user.repository';
import { UserPrismaRepository } from '../infra/prisma/repositories/user.prisma.repository';

container.registerSingleton<IUserRepository>('UserRepository', UserPrismaRepository);
