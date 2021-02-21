import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Main from '../../components/mainPage/mainPage';
import Footer from '../../components/footer/Footer';

import {ContactContainer} from './styled-Contact';
import './Contact.css'

import ProfileImage from '../../img/Profile.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import Email from '../../assets/emai.png';
import Behance from '../../assets/behance.png';

const Contact = props =>{
    return(
        <>
            <Navbar />
                <Main>
                    <ContactContainer>
                        <div id="ProfileSection">
                            <img src={ProfileImage} alt="Profile"/>
                            <h3>Let's Talk</h3>
                        </div>

                        <div id="LinksSection">
                            <a href="https://www.github.com/andersonarojdev">
                                <div className="CardIcon">
                                    <img className="ContactIcons" src={Github} alt="GitHib"/>
                                    <span className="Texts">Github</span>
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/andersonarojdev">
                                <div className="CardIcon">
                                    <img className="ContactIcons" src={Linkedin} alt="Linkedin"/>
                                    <span className="Texts">Linkedin</span>
                                </div>
                            </a>
                            <a href="https://instagram.com/andersonarorjdev">
                                <div className="CardIcon">
                                    <img className="ContactIcons" src={Instagram} alt="Instagram"/>
                                    <span className="Texts">Instagram</span>
                                </div>
                            </a>
                            <a href="mailto:anderson.r.o.r.jr@gmail.com?subject=Hello Anderson">
                                <div className="CardIcon">
                                    <img className="ContactIcons" src={Email} alt="Email"/>
                                    <span className="Texts">Email</span>
                                </div>
                            </a>
                            <a href="https://www.behance.net/andersonjuniorarorj">
                                <div className="CardIcon">
                                    <img className="ContactIcons" src={Behance} alt="Behance"/>
                                    <span className="Texts">Behance</span>
                                </div>
                            </a>
                        </div>
                    </ContactContainer>
                </Main>
            <Footer />
        </>
    );
}

export default Contact;