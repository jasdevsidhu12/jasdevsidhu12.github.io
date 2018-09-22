import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Table, TableBody, TableRow, TableCell, Typography, Paper } from '@material-ui/core';


class EducationItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className={classnames('portfolio-main-panel-child', this.props.class)}>
      <div className="header">
        Education
      </div>
      <Paper>
      <Table>
        <TableBody>
        <TableRow>
          <TableCell>
            <img src="./src/img/itcarlow.jpg" className="itcarlow"/>
          </TableCell>
          <TableCell>
            <Typography>
              Bachelor of Science in Software Development(Hons),<br />
              Institute of Technology Carlow, Ireland (2014 - 2015),<br /> 
              Second Class Honor Grade One (2:1)
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <img src="./src/img/multmd.png" />
          </TableCell>
          <TableCell>
              <Typography>
                Diploma in Information Technology,<br />
                Malaysian Multimedia University,<br />
                Malacca-Malaysia (2010-2011),<br />
                GCPA 3.78
              </Typography>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
      </Paper>
    </div>);
  }
}

EducationItem.propTypes = {
  class: PropTypes.string
}
export default EducationItem;