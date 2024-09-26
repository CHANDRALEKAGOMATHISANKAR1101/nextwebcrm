import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientDashboard from './components/ClientDashboard';
import Tasks from './components/Tasks';
import Invoices from './components/Invoices'; // Import Invoices
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ClientDashboard} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/invoices" component={Invoices} />  {/* Correct route for Invoices */}
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
