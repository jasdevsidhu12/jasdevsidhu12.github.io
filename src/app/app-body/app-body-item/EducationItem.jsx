import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class EducationItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'portfolio-main-panel-child ' + this.props.class}>
        <div className="header">
          Education
        </div>
        <div className="body ed-body">
          <div className="ed-body-row">
            <div className="ed-body-cell">
              <img src="./src/img/itcarlow.jpg" className="itcarlow"/>
            </div>
            <div className="ed-body-cell">
              Bachelor of Science in Software Development(Hons),<br />
              Institute of Technology Carlow, Ireland (2014 - 2015),<br /> 
              Second Class Honor Grade One (2:1)
            </div>
          </div>
          <div className="ed-body-row">
            <div className="ed-body-cell">
              <img src="./src/img/multmd.png" />
            </div>
            <div className="ed-body-cell">
              Diploma in Information Technology,<br />
              Malaysian Multimedia University,<br />
              Malacca-Malaysia (2010-2011),<br />
              GCPA 3.78
            </div>
          </div>
        </div>
      </div>
  );
  }
}

EducationItem.propTypes = {
  class: PropTypes.string
}
export default EducationItem;