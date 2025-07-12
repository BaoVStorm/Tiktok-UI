import { Home, Following, Upload, Profile } from '~/pages';
import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
