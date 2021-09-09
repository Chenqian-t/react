import Login from './views/Login';
import Home from './views/Home';
import NotFound from './views/NotFound';

export const routerConfig = [
    {
        path: '/',
        redirect: '/react/build/home',
        auth: true,
    }, {
        path: '/react/build/home',
        component: Home,
        auth: true,
    }, {
        path: '/react/build/login',
        component: Login,
    }, {
        path: '/react/build/notfound',
        component: NotFound
    }
];