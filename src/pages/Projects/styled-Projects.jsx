import styled from 'styled-components';


export const ProjectsContainer = styled.section`
    height:100%;

    display: Flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap: wrap;

    padding:0px 200px;

    overflow-y:scroll;
`;

export const Card = styled.div`
    width: 180px;
    height: 180px;

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

    p{
        text-align:center;
        font-family:'Fira Code';
        font-size:13px;
    }
`;