import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './nav-bar';
import AppBody from './app-body/AppBody';
import { Grid, Paper } from '@material-ui/core';

import '../css/general.scss';

const App = () => {
	return (
		<Grid container>
			<Grid item sm={3}>
				{/* <Paper>Nav</Paper> */}
				<NavBar />
			</Grid>
			<Grid item sm={9}>
				{/* <Paper>Main</Paper> */}
				<AppBody />
			</Grid>
		</Grid>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));