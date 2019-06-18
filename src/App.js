import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import ReactPixel from 'react-facebook-pixel';

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

const options = {
  autoConfig: true,
  debug: false
};
ReactPixel.init('618518221959202', options);

ReactPixel.pageView();
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
        <Route exact path="/live" component={() => { window.location = 'https://live.weareasterisk.com/versionalpha19'; return null;} } />
        <Route exact path="/discord" component={() => { window.location = 'https://discord.gg/7k9hcnC'; return null;} } />
        <Route component={NotFoundRedirect}/>
      </Switch>

      {/* IMPORT FOOTER */}
      <GlobalFooter/>
      {/* ############# */}
    </Router>
  );
}

export default App;
