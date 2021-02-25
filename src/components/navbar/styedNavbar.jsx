import styled from 'styled-components';

export const NavbarTag = styled.nav`
    min-width:99vw;
    height:10vh;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0px 130px;

    @media(max-width:700px){
        padding:0px 100px;
    }

    @media(max-width:550px){
        padding:0px 60px;
    }

    @media(max-width:470px){
        padding:0px 20px;
    }

    @media(max-width:320px){
        padding:0px 5px;
    }
`;

export const MenuNavbar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media(max-width:${props => props.hide}){
        display:none;
    }
`;

export const MobileMenuButton = styled.button`
    display:none;
    background-color:transparent;
    border:none;
    outline:none;
    padding:2px;
   
    @media(max-width:${props => props.show}){
        display:block;
        width:35px;        
        height:auto;
    }
`;