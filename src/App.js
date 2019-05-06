import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom';

import './styles/custom.scss';
import GlobalNavBar from './components/globalnavbar';
import GlobalFooter from './components/globalfooter';
import HomePage from './components/homepage';
import SignupForm from './components/typeform';
import {Redirect} from "react-router";

const NotFoundRedirect = () => <Redirect to='/' />;

function App() {
  return (
    <Router>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Dosis',
            weights: [200, 300, 400, 500, 600, 800]
          }
        ]}
      />
      {/* IMPORT NAVBAR */}
      <GlobalNavBar/>
      {/* ############# */}

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/register" component={SignupForm}/>
        <Route exact path="/live" component={() => { window.location = 'https://live.weareasterisk.com/versionalpha19'; return null;} } />
        <Route component={NotFoundRedirect}/>
      </Switch>

      {/* IMPORT FOOTER */}
      <GlobalFooter/>
      {/* ############# */}
    </Router>
  );
}

export default App;
