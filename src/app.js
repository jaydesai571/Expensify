import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my Add component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from Edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is from the Help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404!!!!!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDom.render(routes,document.getElementById('app'));
