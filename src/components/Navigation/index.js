import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink as RRNavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap'
import withTheme from '../../hocs/withTheme'
import withAuth from '../../hocs/withAuth'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar expand="md" style={{ background: this.props.colors.background }}>
          <NavbarBrand href="/">Todo list</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  activeClassName="active-link"
                  data-cy="nav-home"
                  exact
                  tag={RRNavLink}
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown active={true} inNavbar nav>
                <DropdownToggle caret data-cy="nav-profile" nav>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active-link"
                      data-cy="nav-profile-details"
                      exact
                      tag={RRNavLink}
                      to="/profile"
                    >
                      Details
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      activeClassName="active-link"
                      data-cy="nav-profile-edit"
                      tag={RRNavLink}
                      to="/profile/edit"
                    >
                      Edit
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      activeClassName="active-link"
                      data-cy="nav-profile-change-password"
                      tag={RRNavLink}
                      to="/profile/changepassword"
                    >
                      Change Password
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  activeClassName="active-link"
                  data-cy="nav-blog"
                  tag={RRNavLink}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active-link"
                  data-cy="nav-weather"
                  tag={RRNavLink}
                  to="/weather"
                >
                  Weather
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName="active-link"
                  data-cy="nav-contact"
                  tag={RRNavLink}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
              {this.props.isAuth ? (
                <Button
                  color="warning"
                  data-cy="nav-loguot-button"
                  onClick={() => this.props.logOut()}
                >
                  Log out
                </Button>
              ) : (
                <NavItem>
                  <NavLink activeClassName="active-link" tag={RRNavLink} to="/login">
                    Log in
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Navigation.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.string.isRequired,
    primary: PropTypes.string,
  }),
}

export default withAuth(withTheme(Navigation))
