import { Router } from 'express';

import { RegisterUserMiddleWare } from '@modules/user/use.cases/register.user/register.user.middleware';

class UserRoutes {
    constructor() {
        console.log(`UserRoutes instance!`);
    }

    register(router: Router) {
        new RegisterUserMiddleWare().register(router, 'post', '/register');
    }
}

export { UserRoutes };
