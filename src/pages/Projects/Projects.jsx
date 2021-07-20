import React,{useState, useEffect} from 'react';
import Axios from 'axios';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import Main from '../../components/mainPage/mainPage';

import {ProjectsContainer,Card} from './styled-Projects';

import Github from '../../assets/github.png';
import api from '../../api';

const Projects = props =>{
    const[Projects, setProjects] = useState([]);

    useEffect( () =>{
        Axios({
            url:api,
            method: 'get'
        }).then((response) => {
            console.log(response);
            setProjects(response.data);
        })
    },[])

    return(
        <>
            <Navbar />
                <Main>
                   <ProjectsContainer>
                       {  
                        Projects.map(project =>(
                        <Card key={project.id}>
                            <h1>{project.name}</h1>
                            <img src={Github} alt="Github" />
                            <p>{project.description}</p>
                            <h5>{project.language}</h5>
                            <a href={project.html_url} target="blank">Acesse o projeto</a>
                        </Card>
                        ))
                       }
                   </ProjectsContainer>
                </Main>
            <Footer />
        </>
    );
}

export default Projects;