import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <div>
          <Layout />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
const Home = () => {
  return <h1>Welcome to my website!</h1>;
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </div>
  );
};
const Layout = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};

export default App;
