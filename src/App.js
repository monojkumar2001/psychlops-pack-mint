import React from "react";
import Mint from './components/Mint';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Mint />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
