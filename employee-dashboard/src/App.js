import React from 'react';
import EmployeeDashboard from './components/EmployeeDashboard';
import Tasks from './components/Tasks';
import Invoices from './components/Invoices';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EmployeeDashboard} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}
 
export default App;