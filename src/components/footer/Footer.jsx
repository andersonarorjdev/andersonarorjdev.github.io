import React from 'react';

import {FooterTAG, FooterIMG, FooterColumn} from './styledFooter';
import './animation.css';

import FooterImage from '../../assets/react.png';


const Footer = props =>{
    return(
        <FooterTAG>
            <FooterColumn>
                <span>Made with</span>
                <FooterIMG id="Animation" src={FooterImage} alt=" Feito com React"/>
            </FooterColumn>
        </FooterTAG>
    );
}

export default Footer;