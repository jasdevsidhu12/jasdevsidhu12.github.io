import React from 'react';
import ReactDOM from 'react-dom';
// import ButtonAppBar from './app-bar/AppBar';
import AppBody from './app-body/AppBody';
// import AppHeader from './app-header/AppHeader';

import '../css/general.scss';

const App = () => {
    return (
        <div>
            {/* <AppHeader /> */}
            {/* <div className="portfolio-picture-panel">
                <b>Jasdev Sidhu</b>
            </div> */}
            <AppBody />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));