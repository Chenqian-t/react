import React, { Component } from 'react';
import { Link, Switch, Route, useParams, Redirect, useHistory, useLocation, useRouteMatch, withRouter } from 'react-router-dom';

class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    <li><Link to={`/login/abc/login`}>to abc</Link></li>
                    <li><Link to='/login/bcd'>to bcd</Link></li>
                    <li><Link to='/home'>to home</Link></li>
                </ul>
                <Switch>
                    <Route path='/login/abc/:id' exact component={Aa}></Route>
                    <Route path='/login/bcd' exact component={Bb}></Route>
                    <Route component={Cc}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Login)

function Aa() {
    let { id } = useParams();
    let history = useHistory();
    let location = useLocation();
    let match = useRouteMatch("/login");
    console.log(id,history,location,match);
    return (
        <div>
            {id === 'login' ? `Aa-${id}` : <Redirect to='/home'></Redirect>}
        </div>
    )
}

function Bb() {
    return (
        <div>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
            Bb<br/>
        </div>
    )
}

function Cc() {
    return (
        <div>
            Cc
        </div>
    )
}