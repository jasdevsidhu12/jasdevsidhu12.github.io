import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider } from '@material-ui/core';
import { IBM, ASE } from './company';
import classnames from 'classnames';


class WorkExp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classnames('portfolio-main-panel-child', this.props.class)}>
        <div className="header">
          Work Experiences
        </div>
        <Paper className={'paper-padd'} component="div" elevation={1}>
          <IBM />
          <Divider />
          <ASE />
        </Paper>
      </div>
  );
  }
}

// WorkExp.prototype = {
//   class: PropTypes.string
// }

export default WorkExp;