import { Home, Following, Upload, Profile } from '~/pages';
import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
