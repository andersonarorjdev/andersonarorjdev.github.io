import React from 'react';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import Main from '../../components/mainPage/mainPage';

const Projects = props =>{
    return(
        <>
            <Navbar />
                <Main>
                    <h1>Projects</h1>
                </Main>
            <Footer />
        </>
    );
}

export default Projects;