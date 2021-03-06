import React, {Component} from 'react';
import {Auth, API, graphqlOperation} from 'aws-amplify'
//import ReactDom from 'react-dom';

import AppBar from './shared/AppBar'
import FundItem from './shared/FundItem'
import FundMutation from '../mutations/FundMutation'
import { Button } from '@material-ui/core';


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

  async saveFund() {
    const desc = 'fund1';
    const risk = 1;
    try {  
      let result = await API.graphql(
          graphqlOperation(FundMutation, {description: desc, riskLevel: risk})
        );
        if(result.data.createFund.fundID === undefined) {
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
        <FundItem />
        <Button onClick={this.saveFund} >
          Add Fund
        </Button>
      </div>
    );
  }
}


export default Market;