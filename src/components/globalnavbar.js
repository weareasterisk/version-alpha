import React, {Component} from 'react';
import {
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
      <Navbar className="navbar" expand="md" dark>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <NavItem>
            <NavLink>whomst</NavLink>
          </NavItem>

        </Collapse>
      </Navbar>
    )
  }
}
