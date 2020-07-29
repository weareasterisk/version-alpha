import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import 'typeface-dosis'

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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDoorOpen, faGamepad, faPuzzlePiece, faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faDoorOpen, faGamepad, faPuzzlePiece, faGhost)

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
