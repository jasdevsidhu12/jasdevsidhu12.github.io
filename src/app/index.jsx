import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProjectBody from './project-body/ProjectBody';
import LearnBody from './learn-body/LearnBody';
import AppBody from './app-body/AppBody';
import { NavBar } from './nav-bar';
import { Grid } from '@material-ui/core';

import '../css/general.scss';

const App = () => {
	return (
		<Grid container>
			<Grid item sm={3}>
				<NavBar />
			</Grid>
			<Grid item sm={9}>
				<HashRouter>
					<div>
					<Route path="/" exact component={AppBody} />
					<Route path="/background" exact component={AppBody} />
					<Route path="/project" exact component={ProjectBody} />
					<Route path="/blog" exact component={LearnBody} />
					</div>
				</HashRouter>
				{/* <ProjectBody /> */}
			</Grid>
		</Grid>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));