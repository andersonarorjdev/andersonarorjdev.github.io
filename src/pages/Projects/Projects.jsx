import React,{useState, useEffect} from 'react';
import Axios from 'axios';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import Main from '../../components/mainPage/mainPage';

import {ProjectsContainer,Card} from './styled-Projects';

import Github from '../../assets/github.png';
import axios from 'axios';
import api from '../../api';

const Projects = props =>{
    const[ProjectName, SetProjectName] = useState('name');
    const[DescriptionName, SetDescription] = useState('description');

   (async () => {
      await axios({
             url:`${api}/repos`,
             method:'get'
         }).then((response) => {
             console.log(response.data[0]);
             SetProjectName(response.data[0].name);
             SetDescription(response.data[0].description);
         })
    })();

    return(
        <>
            <Navbar />
                <Main>
                   <ProjectsContainer>
                        <Card>
                            <h1>{ProjectName}</h1>
                            <img src={Github} alt="Github" />
                            <p>{DescriptionName}</p>
                        </Card>
                   </ProjectsContainer>
                </Main>
            <Footer />
        </>
    );
}

export default Projects;