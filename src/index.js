import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./home";
// import Post from "./post";

// const Home = lazy(() => import("./home"));
const Post = lazy(() => import("./post"));

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*<Route path="/" exact component={WaitingComponent(Home)} />*/}
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={WaitingComponent(Post)} />
        </Switch>
      </div>
    </Router>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Cargando...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
