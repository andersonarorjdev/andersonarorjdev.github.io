import React, {useState} from 'react';

import Navbar from '../../components/navbar/navbar';
import Main from '../../components/mainPage/mainPage';
import Footer from '../../components/footer/Footer';

import {AboutContainer} from './styled-About';
import './About.css';

import BrazilFlag from '../../assets/BrazilFlag.png';
import USAFlag from '../../assets/UsaFlag.png';

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

import Texts from '../../texts/about.json';

let Portuguese = Texts.portuguese;
let English = Texts.english;

const About = props =>{

    const[language, setLanguage] = useState(Portuguese);

    const setToEnglish = props => setLanguage(English);
    const setToPortuguese = props => setLanguage(Portuguese);

    return(
        <>
            <Navbar />
                <Main>
                    <AboutContainer>
                        <div id="TextAbout">
                            <p>
                                <span>Hello World! 0 ou 1?</span> <br />
                                            {language}
                            </p>
                            <div id="Buttons">
                                <button onClick={setToEnglish}>
                                    <img src={USAFlag} alt=""/>
                                </button>

                                <button onClick={setToPortuguese}>
                                    <img src={BrazilFlag} alt=""/>
                                </button>
                            </div>
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