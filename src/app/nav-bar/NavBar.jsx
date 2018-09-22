import React, { Component } from 'react';
import { Typography, Paper, List, ListItem } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

class NavBar extends Component {
  style;
  constructor() {
    super();
    this.style = {width: 100,
      height: 100,
      borderRadius: '100px'};
  }
  render() {
    return (
      <Paper classes={{ root: 'navBarJSX'}}>
        <List>
          <ListItem classes={{ root: 'navJSX'}}>
            <img alt="Jasdev Sidhu"
            src="./src/img/avatar.jpeg" style={this.style} />
          </ListItem>
          <ListItem classes={{ root: 'navJSX'}}>
            <Typography color="inherit">
              <a href="/#/background">
                My Background
              </a>
            </Typography>
          </ListItem>
          <ListItem classes={{ root: 'navJSX'}}>
            <Typography color="inherit">
              <a href="/#/project">
                My Projects
              </a>
            </Typography>
          </ListItem>
          <ListItem classes={{ root: 'navJSX'}}>
            <Typography color="inherit">
              Download CV
            </Typography>
          </ListItem>
        </List>
      </Paper>
      // <div style={this.style}>
        
      // </div>
    );
  }
}

export default NavBar;