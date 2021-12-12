import { Router } from 'express';

import { RegisterUserController } from './register.user.controller';
import { ITypeMethod } from '@shared/geral/type.method';
import { RegisterUserValidator } from './register.user.validator';

class RegisterUserMiddleWare {
    constructor() {
        console.log(`RegisterUserMiddleWare instance!`);
    }

    register(router: Router, typeMethod: ITypeMethod, path: string): void {
        const { handle } = new RegisterUserController();
        const { validate } = new RegisterUserValidator();

        router[typeMethod](path, validate, handle);
    }
}

export { RegisterUserMiddleWare };
