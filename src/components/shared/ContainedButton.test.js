import React from 'react';
import ReactDOM from 'react-dom';
import ContainedButton from './ContainedButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContainedButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});