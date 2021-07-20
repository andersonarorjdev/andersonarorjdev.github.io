import React from 'react';
import Routes from './routes';
import TagManager from 'react-gtm-module';

import GlobaReset from './styles/global-style';

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-PD6GTFH'
}
TagManager.initialize(tagManagerArgs);

  return (
    <>
      <GlobaReset/>
      <Routes />
    </>
  );
}

export default App;