import React from 'react';
import {Link} from 'react-router-dom';

import {NavbarTag, menuNavbar} from './styedNavbar';
import './navbar.css';
import {Logo, sublogo} from './logo';


const Navbar = props =>{
    return(
        <NavbarTag>
            <span id="Logo">
                <Link className="Links" to="/">
                    <span id="logoMain">{Logo}</span>
                        <br/>
                    <span id="logoSub">{sublogo}</span>
                </Link>
            </span>
               <menuNavbar>
                   <span>
                        <Link className="Links linksMenu" to="/projects">Projects</Link>
                   </span>
                   <span>
                        <Link className="Links linksMenu" to="/about">About</Link>
                   </span>
                   <span>
                        <Link className="Links linksMenu" to="/contact">Contact</Link>
                   </span>
               </menuNavbar>
        </NavbarTag>
    );
}

export default Navbar;