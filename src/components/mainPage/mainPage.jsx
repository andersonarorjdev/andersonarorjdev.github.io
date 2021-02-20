import React from 'react';

import {MainTAG} from './styled-main';

const Main = props =>{
    return(
        <MainTAG>
            {props.children}
        </MainTAG>
    );
}
export default Main;