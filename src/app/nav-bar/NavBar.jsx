import React, { Component } from 'react';
import { Typography, Paper, List, ListItem } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import classnames from 'classnames';

class NavBar extends Component {
  style;
  constructor() {
    super();
    const hash = window.location.hash;
    this.getClassNames = this.getClassNames.bind(this);
    this.style = {width: 100,
      height: 100,
      borderRadius: '100px'};
      this.state = {
        background: hash === '#/background' || hash === '' || hash === '#/'  ? true : false,
        project: hash === '#/project' ? true : false,
        blog: hash === '#/blog' ? true : false
      };
  }

  handleListItemClick(event, link) {
    if (link === 'background') {
      this.setState({background: true, blog: false, project: false});
      window.location.href = "/#/background";
    } else if (link === 'project') {
      this.setState({background: false, blog: false, project: true});
      window.location.href = "/#/project";
    } else if (link === 'blog') {
      this.setState({background: false, blog: true, project: false});
      window.location.href = "/#/blog";
    }
  }

  getClassNames(name) {
    return classnames('navJSX', this.state[name] ? 'current-link': '');
  }

  render() {
    return (
      <Paper classes={{ root: 'navBarJSX'}}>
        <List>
          <ListItem classes={{ root: 'navJSX'}}>
            <img alt="Jasdev Sidhu" src="./src/img/avatar.jpeg" style={this.style} />
          </ListItem>
          <ListItem classes={{ root: this.getClassNames('background')}} onClick={event => this.handleListItemClick(event, 'background')}>
            <Typography color="inherit">
              <a>
                <b>My Background</b>
              </a>
            </Typography>
          </ListItem>
          <ListItem classes={{ root: this.getClassNames('project') }} onClick={event => this.handleListItemClick(event, 'project')}>
            <Typography color="inherit">
              <a>
                <b>My Projects</b>
              </a>
            </Typography>
          </ListItem>
          <ListItem classes={{ root: this.getClassNames('blog') }} onClick={event => this.handleListItemClick(event, 'blog')}>
            <Typography color="inherit">
              <a>
                <b>Blog</b>
              </a>
            </Typography>
          </ListItem>
          <ListItem classes={{ root: 'navJSX'}}>
            <Typography color="inherit">
              <a target="_blank" href="https://docs.google.com/document/d/1mv3GqHpXKdnUq76vnXHV_lDXKG4vGlzUsK2RHmZyA5Y/edit?usp=sharing">
                <b>Link to CV</b>
              </a>
            </Typography>
          </ListItem>
        </List>
      </Paper>
    );
  }
}

export default NavBar;