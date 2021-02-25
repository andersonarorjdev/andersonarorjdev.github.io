import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {NavbarTag, MenuNavbar, MobileMenuButton} from './styedNavbar';
import './navbar.css';
import './responsive.css';
import {Logo, sublogo} from './logo';
import ButtonIcon from '../../assets/menu.svg';
import CloseButton from '../../assets/cancel.svg';

const Navbar = props =>{

    const[menuMobile, setMobilemenu] = useState(false);

    const MobileMenu = styled.div`
        display:${menuMobile ? 'flex' : 'none'};
        flex-direction:column;
        background-color:#000000;
        justify-content:space-between;
        position:absolute;
        top:0;
        right:0;
        min-height:50vh;
        min-width:50vw;

        padding:20px;
  `;

    return(
        <NavbarTag>
            <span id="Logo">
                <Link className="Links" to="/">
                    <span id="logoMain">{Logo}</span>
                        <br/>
                    <span id="logoSub">{sublogo}</span>
                </Link>
            </span>
            <MenuNavbar hide="992px" id="MenuNavbar">
                <span>
                    <Link className="Links linksMenu" to="/projects">Projects</Link>
                </span>
                <span>
                    <Link className="Links linksMenu" to="/about">About</Link>
                </span>
                <span>
                    <Link className="Links linksMenu" to="/contact">Contact</Link>
                </span>
            </MenuNavbar>

            <MobileMenuButton onClick={() => {setMobilemenu(!menuMobile)}} show="991px">
                <img id="ButtonMenu" src={ButtonIcon} alt="Menu"/>
            </MobileMenuButton>
            <MobileMenu>
                <MobileMenuButton id="ButtonClose" onClick={() => {setMobilemenu(!menuMobile)}} show="991px">
                    <img id="ButtonMenu" src={CloseButton} alt="Close Button"/>
                </MobileMenuButton>
                <span>
                    <Link className="Links linksMenu" to="/">Home</Link>
                </span>
                <span>
                    <Link className="Links linksMenu" to="/projects">Projects</Link>
                </span>
                <span>
                    <Link className="Links linksMenu" to="/about">About</Link>
                </span>
                <span>
                    <Link className="Links linksMenu" to="/contact">Contact</Link>
                </span>
            </MobileMenu>
        </NavbarTag>
    );
}

export default Navbar;