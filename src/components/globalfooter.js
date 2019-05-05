import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

import {FaSnapchatGhost, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaSnapchat} from 'react-icons/fa'

export default class GlobalFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="bg-darkgrey">
        <Container className="container p-t-75 p-b-30">
          <Row className="justify-content-center">
            <Col md="3" xs="8">
              <div className="h-auto w-100">
                <a href="https://weareasterisk.com/"><div className="h-auto w-100 footer-logo" /></a>
                <p className="footer-text">We are dedicated to bringing people together through the power of shared experiences.</p>
              </div>
            </Col>
            <Col md="3" xs="6">
              <div className="h-auto w-100">
                <p className="footer-text font-weight-bold m-b-2">
                  <b>Get in touch</b>
                </p>
                <p className="footer-text m-b-2">
                  <a className="text-white" rel="noopener noreferrer" href="tel:(214) 989-5511">(214) 989-5511</a>
                </p>
                <p className="footer-text">
                  <a className="orange" rel="noopener noreferrer" href="mailto:hello@weareasterisk.com">hello@weareasterisk.com</a>
                </p>
                <p className="footer-text font-weight-bold m-b-2">
                  <b>Office</b>
                </p>
                <p className="footer-text m-b-2">
                  <a className="text-white" rel="noopener noreferrer" href="https://www.google.com/maps/search/1601+Bryan+St,+42nd+Fl.Dallas,+TX+75201" target="_blank">
                    1601 Bryan St, 42nd Fl. <br/> Dallas, TX 75201
                  </a>
                </p>
              </div>
              <br/>
            </Col>
            <Col md="2" xs="6">
              <div className="h-auto w-100">
                <p className="footer-text font-weight-bold m-b-6">
                  <a className="text-white" href="#home">Home</a>
                </p>
                <p className="footer-text font-weight-bold m-b-6">
                  <a className="text-white" href="#about">About</a>
                </p>
                <p className="footer-text font-weight-bold m-b-6">
                  <a className="text-white" href="#themes">Themes</a>
                </p>
                <p className="footer-text font-weight-bold m-b-6">
                  <a className="text-white" href="#faq">FAQ</a>
                </p>
                <p className="footer-text font-weight-bold m-b-6">
                  <a className="text-white" href="#partners">Partners</a>
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="h-auto w-100">
                <p className="footer-text font-weight-normal">Keep up with us and sign up for our <a href="http://eepurl.com/gp9xIz" rel="noopener noreferrer" target="_blank" className="orange">newsletter</a></p>
                <div className="flex mt-20p">
                  <a href="https://facebook.com/AsteriskEvents">
                    <FaFacebook className="hw-30 m-r-6 text-white"/>
                  </a>
                  <a href="https://twitter.com/HelloAsterisk">
                    <FaTwitter className="hw-30 m-r-6 text-white"/>
                  </a>
                  <a href="https://www.linkedin.com/company/hackdfw/">
                    <FaLinkedin className="hw-30 m-r-6 text-white"/>
                  </a>
                  <a href="https://instagram.com/HelloAsterisk">
                    <FaInstagram className="hw-30 m-r-6 text-white"/>
                  </a>
                  <a href="https://www.snapchat.com/add/hackdfw">
                    <FaSnapchat className="hw-30 m-r-6 text-white"/>
                  </a>

                </div>


              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-black w-100">
          <Container className="bg-black copyright">
            © 2019 Asterisk Co. All Rights Reserved.
          </Container>
        </div>
      </footer>
    )
  }
}
