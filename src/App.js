import React, { Component } from 'react';
import Home from "./components/Home";
import More from "./components/More";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Home />
        {(
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <Route path="/More" component={More} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
     
    </Router>
    );
  }
}

export default App;
