import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Auth = (props) => {
    const { location, config } = props;
    const { pathname } = location;
    const isLogin = Boolean(localStorage.getItem('__token__'));

    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const target = config.find((v) => v.path === pathname);
    if (target && !target.auth && !isLogin) {
        const { component, redirect } = target;
        if (redirect) return <Redirect to={redirect} />;
        return <Route exact path={pathname} component={component} />;
    }

    if (isLogin) {
        // 如果是登陆状态，想要跳转到登陆，重定向到主页
        if (pathname === '/login') {
            return <Redirect to='/' />
        } else {
            // 如果路由合法，就跳转到相应的路由
            if (target) {
                const { component, redirect } = target;
                if (redirect) return <Redirect to={redirect} />;
                return <Route exact path={pathname} component={component} />;
            } else {
                // 如果路由不合法，重定向到 notfound 页面
                return <Redirect to='/notfound' />
            }
        }
    } else {
        // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
        if (target && target.auth) {
            return <Redirect to='/login' />
        } else {
            // 非登陆状态下，路由不合法时，重定向至 notfound
            return <Redirect to='/notfound' />
        }
    }
}

export default Auth