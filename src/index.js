import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {AuthProvider} from './AuthContext'
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  
  <AuthProvider>
    <CSSReset/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AuthProvider>
  
  , document.getElementById('root'));

serviceWorker.unregister();
