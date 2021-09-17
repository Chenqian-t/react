import Login from './views/Login';
import Home from './views/Home';
import NotFound from './views/NotFound';

export const routerConfig = [
    {
        path: '/',
        redirect: '/home',
        auth: true,
    }, {
        path: '/home',
        component: Home,
        auth: true,
    }, {
        path: '/login',
        component: Login,
    }, {
        path: '/notfound',
        component: NotFound
    }
];