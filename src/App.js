import React from 'react';
import ExternalRedirect from './components/externalredirect';

import { BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import './styles/custom.scss';
import GlobalNavBar from './components/globalnavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalNavBar/>
        <Switch>
          <Route path="/live" component={() => { window.location = 'https://live.weareasterisk.com/versionalpha19'; return null;} } />
        </Switch>
        <div className="w-100">
          <div className="pageHome">
            <h1 className="text-center text-white">Version Alpha</h1>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
