import react from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";

// Components
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>

          <Route exact path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
