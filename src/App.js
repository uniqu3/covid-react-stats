import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'tabler-react/dist/Tabler.css';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

import DashboardPage from './pages/DashboardPage';
import CountryStatsPage from './pages/CountryStatsPage';

import './App.css';

function App() {
    return (
        <React.Fragment>
            <div className='app-container'>
                <Header />
                <Switch>
                    <Route exact path='/' component={DashboardPage} />
                    <Route
                        exact
                        path='/country-stats'
                        component={CountryStatsPage}
                    />
                </Switch>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
