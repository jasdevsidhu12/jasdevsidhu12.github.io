import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBodyItem from './app-body-item/AppBodyItem';
import EducationItem from './app-body-item/EducationItem';
// import WorkExperienceItem from './app-body-item/WorkExperienceItem';

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
      <EducationItem class="education" />
      {/* <WorkExperienceItem class="work-exp" /> */}
      {/* <AppBodyItem class="" text={this.summaryText}/> */}
    </div>
  );
  }
}
export default AppBody;