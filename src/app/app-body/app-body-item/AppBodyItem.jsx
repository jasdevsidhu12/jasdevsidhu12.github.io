import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';


class AppBodyItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'portfolio-main-panel-child ' + this.props.class}>
        <div className="header">
          Summary
        </div>
        <Paper className={'paper-padd'} elevation={1}>
          <Typography component="p">
            { this.props.text }
          </Typography>
        </Paper>
      </div>
  );
  }
}

AppBodyItem.propTypes = {
  class: PropTypes.string,
  text: PropTypes.string
}
export default AppBodyItem;