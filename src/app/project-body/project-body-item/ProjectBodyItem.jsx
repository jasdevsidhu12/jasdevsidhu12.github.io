import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider } from '@material-ui/core';
import classnames from 'classnames';
import { FEProj1, FEProj2, FEProj3 } from './projects';


class ProjectBodyItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classnames('portfolio-main-panel-child', this.props.class)}>
        <div className="header">
          Projects
        </div>
        <Paper className={'paper-padd'} elevation={1}>
          <FEProj1 />
          <Divider />
          <FEProj2 />
          <Divider />
          <FEProj3 />
          <Divider />
        </Paper>
      </div>
  );
  }
}

ProjectBodyItem.propTypes = {
  class: PropTypes.string
}

export default ProjectBodyItem;
