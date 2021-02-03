import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center my-3">
          <Link className="px-4" to="/">Home</Link>
          <Link className="px-4" to="/events">Events</Link>
        </div>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
      </div>
    );
  }
}
