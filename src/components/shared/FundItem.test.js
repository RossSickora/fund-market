import React from 'react';
import ReactDOM from 'react-dom';
import FundItem from './FundItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FundItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});