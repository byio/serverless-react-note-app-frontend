import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
