import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

export default class GlobalFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="bg-darkgrey">
        <Container className="container p-t-75 p-b-30">
          <Row>
            <Col className="h-100 h-80p-min w-200p w-200p-max m-r-72">
              <div className="h-auto w-200p">
                <div className="h-auto w-100 footer-logo"/>
                <p className="footer-text -m-r-20">We are dedicated to bringing people together through the power of shared experiences.</p>
              </div>
            </Col>
            <Col className="h-100 h-80p-min w-200p w-200p-max">
              <div className="h-auto w-100">
                <p className="footer-text font-weight-bold m-b-2">
                  <b>Get in touch</b>
                </p>
                <p className="footer-text m-b-2">
                  <a className="text-white" href="tel:(214) 989-5511">(214) 989-5511</a>
                </p>
                <p className="footer-text">
                  <a className="orange" href="mailto:hello@weareasterisk.com">hello@weareasterisk.com</a>
                </p>
                <p className="footer-text font-weight-bold m-b-2">
                  <b>Office</b>
                </p>
                <p className="footer-text m-b-2">
                  <a className="text-white" href="https://www.google.com/maps/search/1601+Bryan+St,+42nd+Fl.Dallas,+TX+75201">
                    1601 Bryan St, 42nd Fl. <br/> Dallas, TX 75201
                  </a>
                </p>
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
