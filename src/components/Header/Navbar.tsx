import React, {FC} from 'react';
import cl from './Header.module.sass'
import {NavLink} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className={cl.header}>
            <nav>
                <ul>
                    <li> <NavLink to={'/'}>Main</NavLink></li>
                    <li> <NavLink to={`/anime/random`}>Random</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;