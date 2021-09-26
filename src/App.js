import './App.css';

import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App= () => (

  <Router>
    <div className="container">
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/details" render={() => <Details />} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );


export default App;
