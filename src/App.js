import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';
import {IntlProvider} from "react-intl"
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl'


function App() {
  return (
    <IntlProvider locale="ru" >
    <GlobalProvider>
      <Main />
    </GlobalProvider>
    </IntlProvider>
  );
}

export default App;
