import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'
import config from './config';

import Market from './components/Market'

Amplify.configure(config.amplify);



function App() {
  return (
    <Market />
  );
}

export default withAuthenticator(App);
