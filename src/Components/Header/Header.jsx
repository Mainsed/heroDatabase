import React, {} from 'react'
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={'header'}>
        <NavLink to={'/main/1'}>
            <img src="#" alt="logo"/>
        </NavLink>
        <span>Heroes database</span>
        <NavLink to={'/createhero'}>Create hero</NavLink>
    </div>
}

export default Header;