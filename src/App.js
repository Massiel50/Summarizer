import './App.css';

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


const App = () => (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route component={NotFound} />
      </Switch>

    </div>
    </Router>
  );


export default App;
