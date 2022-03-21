import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SideBarProvider from './Context/SidebarContext';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <SideBarProvider>
      <GlobalStyle/>
      <App />
    </SideBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);