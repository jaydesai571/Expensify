import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Router, Switch, Link, NavLink} from 'react-router-dom';
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
        404!!!!! -- <Link to="/">Go HOME</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact="true" >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" >Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" >Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help</NavLink>
    </  header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDom.render(routes,document.getElementById('app'));
