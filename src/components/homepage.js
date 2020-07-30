import FAQ from "./faq";
import FAQMobile from './faqMobile';
import React, {Component} from "react";
import Media from 'react-media';

import {Col, Row, Button} from "reactstrap";
import Schedule from "./schedule";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <div className="w-100">
          <section id="home" className="pageHome">
            <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/versionalpha-homebrew.png" className="img-fluid image-center va-logo invert-color-filter"/>
            <h3 className="p-top-50 orange"><i>"Homebrew"</i></h3>
            <div className="description-block">
              <p className="description-item">August 7th - 9th</p>
              <p className="description-item">The Game Jam of Quakecon at Home</p>
            </div>
          <Button className='skeletonButton' href="https://architech-inc.typeform.com/to/k6zYOXYx" target="_blank">Register Now!</Button>
          <br/>
          <br/>
          <Button className='skeletonButton m-r-20' href="https://discord.gg/quakecon" target="_blank">Discord</Button>
          <Button className='skeletonButton m-r-20' href="https://itch.io" target="_blank">Itch.io</Button>
          <Button className='skeletonButton' href="https://quakecon.bethesda.net/en" target="_blank">Quakecon at Home</Button>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/artwork/VA_Controller_v1-min.png" className="img-fluid image-center controller-art"/>
          <section id="about" className="pageAbout jumptarget">
            <h1>About</h1>
            <div className="w-800p margin-center container-fluid">
              <h4 className="p-header orange">THE QUAKECON AT HOME GAME JAM</h4>
              <p className="speech">
               Version Alpha: Homebrew is a free virtual Game Jam hosted with
               <a className="branding-orange" href="https://quakecon.bethesda.net/en" target="_blank" rel="noopener noreferrer"> Quakecon at Home</a>, a three-day event hosted yearly, currently online for everyone to participate in. <a className="branding-orange" href="https://www.weareasterisk.com/" target="_blank" rel="noopener noreferrer">Asterisk</a> is proud to partner with Quakecon at Home to bring together the best elements of gaming and game development in a high powered weekend full of building, prototyping, and (hopefully) Bawls.
              <br/>
              <br/>
              Over the last decade, few industries have accelerated like that of gaming and esports. New paradigms are being introduced in every game that is produced. Technology has allowed us to push the boundaries of games and their development to new horizons. On the flip side, gaming has contributed a lot to the way we develop new technology. Version Alpha: Homebrew aims to push the boundaries of innovation: gaming and otherwise! For one weekend, a diverse group will collaborate on ideating, developing, and exploring the games of tomorrow.
              </p>
              <h4 className="p-header orange">WHAT IS QUAKECON AT HOME?</h4>
              <p className="speech">
              Quakecon is a yearly gaming convention held by ZeniMax Media. It typically includes a bring-your-own-computer LAN party event and a competitive tournament, alongside many other events The 25th Annual QuakeCon will be the first QuakeCon held remotely. As part of Quakecon at Home, participants of Version Alpha: Homebrew are invited to work alongside, and enjoy, the fun events of Quakecon at Home.
              <br/>
              <br/>
              </p>
              <p><a className="branding-orange" href="https://quakecon.bethesda.net/en" target="_blank" rel="noopener noreferrer" > + Learn more about Quakecon at Home</a></p>
            </div>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          <section id="themes" className="pageThemes jumptarget">
            <h1>Themes</h1>
            <div className="w-800p margin-center container-fluid">
              <p className="font-weight-bold branding-orange m-b-6">
              The official theme will be announced as we get a little closer to the event, keep an eye out on social media and the Discord!
              </p>
            </div>
          </section>
          <img src="https://cdn.weareasterisk.com/hackathon-assets/versionalpha/logos/VA_Logo_MarkWhite.svg" className="img-fluid image-center break-image-small"/>
          <section id="schedule" className="jumptarget">
            <Schedule/>
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
              <Row className="justify-content-center">
                <Col sm="4" xs="6">
                  <div className="vertical-center-image">
                    <a href="https://quakecon.bethesda.net/en/" target="_blank" rel="noopener noreferrer" title="QuakeCon" >
                      <img src="https://cdn.weareasterisk.com/sponsor-assets/quakecon/quakecon-at-home--longform--color--RGB--transparent-background.png" className="image-center partners-image"/>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
