import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import config from './config';

import Market from './components/Market'

Amplify.configure(config.amplify);



function App() {
  return (
    <Market />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default withAuthenticator(App);