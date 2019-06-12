import React from 'react';
import ReactDOM from 'react-dom';
import Market from './Market';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Market />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders an App Bar on the screen', () => {
//   const div = document.createElement('div');
//   ReactDom.render(<Market />, div);
  
// });