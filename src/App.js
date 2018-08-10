import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Auth } from 'aws-amplify';

import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAutheticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch(error) {
      if (error !== 'No current user') {
        alert(error);
      }
    }

    this.setState({ isAuthenticated: false });
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({
      isAutheticated: authenticated
    });
  }

  handleLogout = () => {
    this.userHasAuthenticated(false);
  }

  renderAuthButtons = () => {
    return this.state.isAutheticated ?
      <NavItem onClick={this.handleLogout}>Log Out</NavItem> :
      <Fragment>
        <LinkContainer to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
      </Fragment>
  }

  render() {
    const childProps = {
      isAutheticated: this.state.isAutheticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.renderAuthButtons()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
