import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';

import AuthOrApp from './AuthOrApp';
import Dashboard from '../Dashboard/Dashboard';
// import Dashboard from '../Dashboard2/Dashboard2';
import BillingCycle from '../billingCycle/BillingCycle';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path="billingcycles" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
)

export default Routes;