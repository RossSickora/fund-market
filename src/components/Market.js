import React, {Component} from 'react';
//import ReactDom from 'react-dom';

import AppBar from './shared/AppBar'

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {user: undefined}
  }
  render() {
    return (
      <div className="Market">
        <AppBar />
        <h1>Hello, world!</h1>
      </div>
    );
  }
}


export default Market;