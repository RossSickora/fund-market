import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = theme => ({
    fundItem: {
        marginTop: '15px',
        width: '100%',
        padding: '5px',
        maxWidth: '800px'
    },
  });

class FundItem extends Component {
    state = {elevation: 2}
    render() { 
        const {classes} = this.props;
        return (
            <Paper
                className={classes.fundItem}
                elevation = {this.state.elevation}
                onMouseOver = {() => this.setState( {elevation: 6} )}
                onMouseOut = {() => this.setState( {elevation: 2} )}
            >
                Fund Item
            </Paper>
        )
    }
}

export default withStyles(useStyles)(FundItem);