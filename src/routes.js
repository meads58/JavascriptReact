import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);