import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProjectBody from './project-body/ProjectBody';
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
				<BrowserRouter>
					<div>
					<Route path="/" exact component={AppBody} />
					<Route path="/background" exact component={AppBody} />
					<Route path="/project" exact component={ProjectBody} />
					</div>
				</BrowserRouter>
				{/* <ProjectBody /> */}
			</Grid>
		</Grid>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));