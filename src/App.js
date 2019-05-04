import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

import { BrowserRouter as Router,
Route,
Switch,
Redirect,
Link
} from 'react-router-dom';

import './styles/custom.scss';
import GlobalNavBar from './components/globalnavbar';
import GlobalFooter from './components/globalfooter';
import Button from "reactstrap/es/Button";

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
      <GlobalNavBar/>
      <div className="App">
        <Switch>
          <Route path="/live" component={() => { window.location = 'https://live.weareasterisk.com/versionalpha19'; return null;} } />
        </Switch>
        <div className="w-100">
          <section id="home" className="pageHome">
            <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_LockUpWhite.svg" className="img-fluid image-center va-logo"/>
            <h3 className="p-top-50 orange"><i>"Reimagining the Future of Gaming"</i></h3>
            <div className="description-block">
              <p className="description-item">May 31 - Jun 2, 2019</p>
              <p className="description-item">Kay Bailey Hutchinson Center | Dallas, TX</p>
            </div>
            <Button className="skeletonButton">REGISTER</Button>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/artwork/VA_Controller_v1-min.png" className="img-fluid image-center controller-art"/>
          <section id="about" className="pageAbout jumptarget">
            <h1>About</h1>
            <div className="w-800p margin-center container-fluid">
              <h4 className="p-header orange">A gaming-focused hackathon experience like no other</h4>
              <p className="speech">
                Version Alpha is Dallas’s first gaming-focused hackathon hosted in the middle of <a href="https://dreamhack.com/dallas/">DreamHack Dallas</a>, a three-day event with everything gaming under one roof. [Asterisk] is proud to partner with DreamHack to bring together the best elements of hackathons and gaming in a high powered weekend full of building, prototyping, and epic gg’s.
                <br/>
                <br/>
                Over the last decade, few industries have accelerated like that of gaming and esports. New paradigms are being introduced in every game that is produced. Technology has allowed us to push the boundaries of games and their development to new horizons. On the flip side, gaming has contributed a lot to the way we develop new technology. Version Alpha aims to push the boundaries of innovation: gaming and otherwise! For one weekend, a diverse group will collaborate on ideating, prototyping, and exploring the future of tomorrow.
              </p>
              <h4 className="p-header orange">What is dreamhack?</h4>
              <p className="speech">
                DreamHack is the ultimate gaming lifestyle festival. As part of DreamHack Dallas, all Version Alpha attendees get a three-day festival pass, providing access to the entire festival including all of its shows, speaking events, LAN and watch parties, and more.
              </p>
            </div>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image"/>
          <section id="themes" className="pageThemes jumptarget">
            <h1>Themes</h1>
            <div className="w-800p margin-center container-fluid">
              <p className="font-weight-bold branding-orange m-b-6">Innovating the Gaming Industry</p>
              <p>
                Outside of games, a variety of software and technology exists for gaming enthusiasts. Platforms like Twitch or Discord provide streaming and communication capabilities to hundreds of millions of users across the globe. Shared marketplaces have made games available and more accessible across a variety of platforms. How might we innovate the products and services around games to make games more inclusive of and accessible to everyone?
              </p>
              <p className="font-weight-bold branding-orange m-b-6">Game Development</p>
              <p>
                Developers, designers, artists, and playtesters all share a common interest in pushing the creative boundaries of game development. Whether you work on the biggest franchises or small indie games, prototyping is a valuable and important part of the build process. How might we prototype an innovative game experience over the course of 36 hours?
              </p>
              <p className="font-weight-bold branding-orange m-b-6">Gamification in UX</p>
              <p>
                User experience is everything in games. Let’s see how we can extend that experience outside of the gaming industry. How might we utilize the rewarding aspects of gamification to improve product and service offerings?
              </p>
            </div>
          </section>
        </div>
      </div>
      <GlobalFooter/>
    </Router>
  );
}

export default App;
