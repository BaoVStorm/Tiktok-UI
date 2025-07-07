import { Home, Following, Upload } from '~/pages';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// require login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
