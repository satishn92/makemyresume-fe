import React from "react"; // eslint-disable-line
import { Router, Route, IndexRoute } from "react-router";
import useScroll from "scroll-behavior/lib/useStandardScroll";
import createHistory from "history/lib/createBrowserHistory";
import Home from "pages/home/Home";

const history = useScroll(createHistory)();

export default (
  <Router history={history}>
    <Route path="/" component={Home}></Route>
  </Router>
);
