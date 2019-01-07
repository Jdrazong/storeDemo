import React from 'react';
import Header from 'Header/Header';
import Routes from 'Routes/Routes';
import 'styles/App.scss';

const App = () => (
    <div>
        <Header />
        <div className="content-container">
            <Routes />
        </div>
    </div>
);

export default App;
