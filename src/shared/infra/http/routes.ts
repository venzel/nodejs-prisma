import { Router } from 'express';

import { UserRoutes } from '../../../modules/user/infra/http/routes/user.routes';

const routes = (): Router => {
    const router = Router();

    new UserRoutes().register(router);

    return router;
};

export { routes };
