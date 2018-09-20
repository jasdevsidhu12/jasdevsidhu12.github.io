import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


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
        <div className="body">
        {this.props.text}
        </div>
      </div>
  );
  }
}

AppBodyItem.propTypes = {
  class: PropTypes.string,
  text: PropTypes.string
}
export default AppBodyItem;