import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Header, Main, NotFoundPage } from 'components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
