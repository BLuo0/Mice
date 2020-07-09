import React from 'react';
// import {Provider} from "mobx-react";
// import {RouterStore, syncHistoryWithStore} from "mobx-react-router";
// import {createHashHistory} from "history";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import { store, StoreContext } from 'stores';
import Home from 'pages/home';
import About from 'pages/about';
import Head from '../pages/Head';
import News from '../pages/news';
import Ant from '../pages/ant';
import Error from '../pages/error';


// const hashHistory = createHashHistory();
// const routerStore = new RouterStore();
// const history = syncHistoryWithStore(hashHistory, routerStore);
// routerStore['routing'] = routerStore;

const Routes = () => (
    <StoreContext.Provider value={store}>
        <Router>
            <Head />
            <Router exact path="/" render={() => (<Redirect to="/" />)} />
            <Switch>
                <Route exact path={"/home"} component={Home} />
                <Route path={"/about"} component={About} />
                <Route path={"/news"} component={News} />
                <Route path={"/ant"} component={Ant} />
                <Redirect exact from="/" to="/home" />
                <Route component={Error} />
            </Switch>
        </Router>
    </StoreContext.Provider>
);

export default Routes