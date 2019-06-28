import React, {Component} from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify'
//import ReactDom from 'react-dom';

import AppBar from './shared/AppBar'
import FundMutation from '../mutations/FundMutation'

class Market extends Component {

  constructor(props) {
    super(props);
    this.state = {user: undefined}
  }

  async componentWillMount() {
    try {
      let user = await Auth.currentUserInfo();
      this.setState({user});
    }
    catch (e) {
      console.log(e);
    }
  }

  async saveFund(description, riskLevel) {
    try {  
      let result = await API.graphql(
          graphqlOperation(FundMutation, {description, riskLevel})
        );
        if(result.data.createFund.code !== 200) {
          alert('an Error occured saving the fund, please try again');
        }
        else {
          window.location.reload();
        }
      }
      catch (e) {
        console.log(e);
      }
  }
  

  render() {
    return (
      <div className="Market">
        <AppBar />
        <h1>Hello, world!</h1>
        <button onClick={this.saveFund('test', 1)} />
      </div>
    );
  }
}




export default Market;