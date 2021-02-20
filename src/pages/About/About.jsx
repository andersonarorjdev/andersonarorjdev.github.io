import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Main from '../../components/mainPage/mainPage';
import Footer from '../../components/footer/Footer';

import {AboutContainer} from './styled-About';
import './About.css';

import Bootstrap from '../../assets/bootstrap.png';
import CSS from '../../assets/css.png';
import HTML from '../../assets/html.png';
import JS from '../../assets/javascript.png';
import Laravel from '../../assets/Laravel.png';
import MYSQL from '../../assets/Mysql.png';
import NodeJS from '../../assets/nodejs.png';
import PHP from '../../assets/php.png';
import ReactIMG from '../../assets/react.png';
import ReactNativeIMG from '../../assets/reactnative.png';
import Redux from '../../assets/redux.jpg';
import Typescript from '../../assets/typescript.png';

const About = props =>{
    return(
        <>
            <Navbar />
                <Main>
                    <AboutContainer>
                        <div id="TextAbout">
                            <p>
                                <span>Hello World! 0 ou 1?</span> <br />
                                Estudo á área de Desenvolvimento de
                                Software á aproximadamente 1,5 anos.
                                Ao longo dessa incrível tragetória,
                                consegui aprender como que a internet
                                e o mundo da tecnologia funciona para
                                manter cada vez mais as pessoas conectadas.
                            </p>
                        </div>

                        <div id="TechsDiv">
                            <h1>Techs</h1>
                            <div id="Techs">
                                <img className="TechsIcons" src={Bootstrap} alt="Bootstrap"/>
                                <img className="TechsIcons" src={CSS} alt="CSS"/>
                                <img className="TechsIcons" src={HTML} alt="HTML"/>
                                <img className="TechsIcons" src={JS} alt="Javascript"/>
                                <img className="TechsIcons" src={Laravel} alt="Laravel"/>
                                <img className="TechsIcons" src={MYSQL} alt="Mysql"/>
                                <img className="TechsIcons" src={NodeJS} alt="NodeJS"/>
                                <img className="TechsIcons" src={PHP} alt="PHP"/>
                                <img className="TechsIcons" src={ReactIMG} alt="ReactJS"/>
                                <img className="TechsIcons" src={ReactNativeIMG} alt="React Native"/>
                                <img className="TechsIcons" src={Redux} alt="Redux"/>
                                <img className="TechsIcons" src={Typescript} alt="Typescript"/>
                            </div>
                        </div>
                    </AboutContainer>
                </Main>
            <Footer />
        </>
    );
}

export default About;