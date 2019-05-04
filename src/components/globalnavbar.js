import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavbarBrand,
  NavLink,
  Collapse
} from "reactstrap";

export default class GlobalNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
      <Navbar className="navbar" expand="md" dark color="black" fixed="top">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar className="nav-center justify-content-center">
          <Nav navbar>
            <NavItem>
              <NavLink href="#home">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#themes">THEMES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#partners">PARTNERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sponsors">SPONSORS</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    )
  }
}
