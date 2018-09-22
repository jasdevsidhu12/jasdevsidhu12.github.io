import React, { Component } from 'react';
import { AppBodyItem, EducationItem, WorkExp } from './app-body-item';

class AppBody extends Component { 
  constructor() {
    super();
    this.summaryText = ` A passionate developer with relentless to win attitude and experience working professionally 
    and personally on front-end development projects. 
    An adaptable individual who is driven to develop modern front-end development skills with agile development 
    approach in mind and prioritize a team victory rather than individual victory.`
  }
  render() {
    return (
    <div className="portfolio-flex-main-panel">
      <AppBodyItem class="summary" text={this.summaryText}/>
      <EducationItem class="summary" />
      <WorkExp class="summary"/>
    </div>
  );
  }
}
export default AppBody;