import React from 'react';
// import {Provider} from "mobx-react";
// import {RouterStore, syncHistoryWithStore} from "mobx-react-router";
// import {createHashHistory} from "history";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';

import { store, StoreContext } from 'stores';
import Home from 'pages/home';
import About from 'pages/about';

// const hashHistory = createHashHistory();
// const routerStore = new RouterStore();
// const history = syncHistoryWithStore(hashHistory, routerStore);
// routerStore['routing'] = routerStore;

const Routes = () => (
    <StoreContext.Provider value={store}>
        <Router>
            <Route exact path="/" render={() => <Redirect to="/" />} />
            <Switch>
                <Home>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/about"} component={About} />
                </Home>
            </Switch>
        </Router>
    </StoreContext.Provider>
);

export default Routes