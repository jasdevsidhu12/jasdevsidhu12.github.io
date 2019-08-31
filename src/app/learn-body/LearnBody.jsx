import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider } from '@material-ui/core';
import classnames from 'classnames';
import { IISUser } from "./learn"


class LearnBody extends Component {
  constructor(props) {
    super(props);
    this.style = { height: '100%' }
  }
  render() {
    return (
      <div className="portfolio-flex-main-panel">
        <div className={classnames('portfolio-main-panel-child', 'summary')}>
          <div className="header">
            Things I Learn
        </div>
          <Paper className={'paper-padd'} elevation={1}>
            <IISUser>
            </IISUser>
          </Paper>
        </div>
      </div>
    );
  }
}

LearnBody.propTypes = {
  class: PropTypes.string
}

export default LearnBody;
