import styled from 'styled-components';


export const ProjectsContainer = styled.section`
    height:100%;

    display: Flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap: wrap;

    padding:0px 0px;

    overflow-y:scroll;

    @media(min-width:800px){
        padding:0px 150px;
    }
`;

export const Card = styled.div`
    width: 220px;
    height: 260px;

    background-color:#5E17EB;
    border-radius: 20px;

    margin:20px 20px 10px 10px;

    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;

    img{
        width:45px;
        height:auto;
    }

    h1{
        font-size:13px;
    }

    p{
        text-align:center;
        font-family:'Fira Code';
        font-size:12px;
    }

    a{
        font-weight:bolder;
        font-family:'Anonymous Pro';
        font-size:13px;

        position:relative;
        bottom:10px;
    }

    a:hover{
        background-color:#FFFFFF;
        color:#5E17EB;
        padding:2px;
    }

    
`;