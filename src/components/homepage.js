import Button from "reactstrap/es/Button";
import FAQ from "./faq";
import FAQMobile from './faqMobile';
import React, {Component} from "react";
import Media from 'react-media';

import * as typeformEmbed from '@typeform/embed';
import {Col, Row} from "reactstrap";

export default class HomePage extends Component {
  componentDidMount() {
    const popup = typeformEmbed.makePopup(
      'https://architech-inc.typeform.com/to/uTc3t7',
      {
        mode: 'popup',
        hideHeaders: true,
        onSubmit: () => {popup.close()}
      }
    );
    document.getElementById("reg-button").addEventListener('click',() => {
      popup.open();
    })
  }

  render() {
    return (
      <div className="App">
        <div className="w-100">
          <section id="home" className="pageHome">
            <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_LockUpWhite.svg" className="img-fluid image-center va-logo"/>
            <h3 className="p-top-50 orange"><i>"Reimagining the Future of Gaming"</i></h3>
            <div className="description-block">
              <p className="description-item">May 31 - Jun 2, 2019</p>
              <p className="description-item">Kay Bailey Hutchinson Center | Dallas, TX</p>
            </div>
            <Button className="skeletonButton" id="reg-button">PRE-REGISTER</Button>

          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/artwork/VA_Controller_v1-min.png" className="img-fluid image-center controller-art"/>
          <section id="about" className="pageAbout jumptarget">
            <h1>About</h1>
            <div className="w-800p margin-center container-fluid">
              <h4 className="p-header orange">A gaming-focused hackathon experience like no other</h4>
              <p className="speech">
                Version Alpha is Dallas’s first gaming-focused hackathon hosted in the middle of <a className="branding-orange" href="https://dreamhack.com/dallas/" target="_blank"><b>DreamHack Dallas</b></a>, a three-day event with everything gaming under one roof. <a className="branding-orange" href="https://weareasterisk.com/" target="_blank"><b>Asterisk</b></a> is proud to partner with DreamHack to bring together the best elements of hackathons and gaming in a high powered weekend full of building, prototyping, and epic gg’s.
                <br/>
                <br/>
                Over the last decade, few industries have accelerated like that of gaming and esports. New paradigms are being introduced in every game that is produced. Technology has allowed us to push the boundaries of games and their development to new horizons. On the flip side, gaming has contributed a lot to the way we develop new technology. Version Alpha aims to push the boundaries of innovation: gaming and otherwise! For one weekend, a diverse group will collaborate on ideating, prototyping, and exploring the future of tomorrow.
              </p>
              <h4 className="p-header orange">What is dreamhack?</h4>
              <p className="speech">
                DreamHack is the ultimate gaming lifestyle festival. As part of DreamHack Dallas, all Version Alpha attendees get a three-day festival pass, providing access to the entire festival including all of its shows, speaking events, LAN and watch parties, and more.
              </p>
              <p><a className="branding-orange" href="https://dreamhack.com/dallas" target="_blank"> + Learn more about DreamHack</a></p>
            </div>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
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
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          {/* IMPORT FAQ */}
          <section id="faq" className="jumptarget">
            <Media
              query="(max-width: 762px)">
              {matches =>
                matches ? (
                  <FAQMobile/>
                ) : (
                  <FAQ/>
                )
              }
            </Media>
          </section>
          {/* ########## */}
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          <section id="partners" className="jumptarget">
            <h1>Partners</h1>
            <br/>
            <div className="w-800p margin-center container-fluid h-100 justify-content-center">
              <Row>
                <Col sm="4" className="justify-content-center">
                  <div className="h-200p-min">
                    <a href="https://www.dallaschamber.org/" target="_blank">
                      <img src="https://cdn.weareasterisk.com/hackathon-assets/partners/dallas-chamber.png" className="img-fluid image-center partners-image margin-center h-200p-max w-auto w-200p-max"/>
                    </a>
                  </div>
                </Col>
                <Col sm="4" className="h-200p-min">
                  <a href="https://www.dallaschamber.org/" target="_blank">
                    <img src="https://cdn.weareasterisk.com/hackathon-assets/partners/dreamhack.png" className="img-fluid image-center partners-image margin-center h-200p-max w-auto w-200p-max m-t-32"/>
                  </a>
                </Col>
                <Col sm="4" className="h-200p-min">
                  <a href="https://www.igda.org/" target="_blank">
                    <img src="https://cdn.weareasterisk.com/hackathon-assets/partners/IGDA.png" className="img-fluid image-center partners-image margin-center h-200p-max w-auto w-200p-max p-16"/>
                  </a>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
