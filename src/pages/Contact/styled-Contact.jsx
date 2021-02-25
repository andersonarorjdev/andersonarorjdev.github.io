import styled from 'styled-components';

export const ContactContainer = styled.section`
    height:100%;
    max-height:99vh;

    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:800px){
        flex-direction:column;
    }
`;