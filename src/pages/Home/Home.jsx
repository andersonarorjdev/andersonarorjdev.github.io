import React, {useState} from 'react';

import Navbar from '../../components/navbar/navbar';
import Main from '../../components/mainPage/mainPage';
import Footer from '../../components/footer/Footer';

import ProfilePIC from '../../img/Profile.png';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import BrazilFlag from '../../assets/BrazilFlag.png';
import USAFlag from '../../assets/UsaFlag.png';

import './home.css';

import Text from '../../texts/home.json';

let Portuguese = Text.portugues;
let English = Text.english;

const Home = props =>{

    const[languague, setLanguge] = useState(Portuguese);
  
        const ChangeLanguageEnglish = props =>{
            setLanguge(English);
        }

        const ChangeLanguagePortuguese = props =>{
            setLanguge(Portuguese);
        }

    return(
        <>
            <Navbar />
                <Main>
                    <section id="HomeContainer">
                        <div id="PicText">
                           <div id="ProfilePic">
                                <img src={ProfilePIC} alt="Anderson Junior PIC"/>
                           </div>

                            <div id="TextHome">
                                <p>
                                    <span>Hello World! 0 ou 1?</span> <br />
                                    {languague}
                                </p>
                            </div>
                        </div>

                        <div id="SocialLanguage">
                            <div id="SocialIcons">
                                <a href="https://github.com/andersonarorjdev" target="blank">
                                    <img src={Github} alt="Github Link"/>
                                </a>
                                <a href="https://instagram.com/andersonarorjdev" target="blank">
                                    <img src={Instagram} alt="Github Link"/>
                                </a>
                                <a href="https://linkedin.com/in/andersonarorjdev" target="blank">
                                    <img src={Linkedin} alt="Github Link"/>
                                </a>
                            </div>
                           <div id="ChooseLanguage">
                                <div>
                                    <h4>Don't understand?</h4>
                                    <h5>Change the language below</h5>
                                </div>
                                <div id="LanguageButtons">
                                    <button class="LanguageButton" onClick={ChangeLanguagePortuguese}>
                                        <img class="Flags" src={BrazilFlag} alt="Brazil Flag"/>
                                    </button>
                                    <button class="LanguageButton" onClick={ChangeLanguageEnglish}>
                                        <img class="Flags" src={USAFlag} alt="Usa Flag"/>
                                    </button>
                                </div>
                           </div>
                        </div>
                    </section>
                </Main>
            <Footer />
        </>
    );
}
export default Home;