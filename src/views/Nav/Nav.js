import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/" exact={true} activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/todo" activeClassName="active">Todo</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/user" activeClassName="active">User</NavLink></li>

                </ul>
            </div>
        )
    }
}


export default Nav;