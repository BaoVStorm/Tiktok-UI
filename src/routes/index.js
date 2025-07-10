import { Home, Following, Upload, Profile } from '~/pages';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/user/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
