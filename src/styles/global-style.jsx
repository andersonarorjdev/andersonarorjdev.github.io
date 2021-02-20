import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0px;
        border-radius:0px;
        box-sizing:border-box;

        color:#ffffff;
    }

    body{
        background-color:#000000;
        
        max-height:100vh;
        max-width:100vw;

        font-family:'Anonymous Pro', monospace;
    }

`;