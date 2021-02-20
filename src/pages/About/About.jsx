import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Main from '../../components/mainPage/mainPage';
import Footer from '../../components/footer/Footer';

const About = props =>{
    return(
        <>
            <Navbar />
                <Main>
                    <h1>About</h1>
                </Main>
            <Footer />
        </>
    );
}

export default About;