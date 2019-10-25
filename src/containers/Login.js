import React, { Component } from "react";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      code: "",
    };
  }

  login(email, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err)
      })
    );
  }

  code(code) {
    return new Promise((resolve, reject) => {
      var didSucceed = code === "54321";
      didSucceed ? resolve('Success') : reject('Incorect Passphrase');
    })
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  validateFormCode() {
    return this.state.code.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.login(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  handleSubmitCode = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.code(this.state.code);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmitCode}>
          <h4>Page is restricted.</h4>
          <p>Please enter code below.</p>
          <hr />
          <FormGroup controlId="code" bsSize="large">
            <ControlLabel>Code</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateFormCode()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Enter"
            loadingText="Checking..."
          />
        </form>

        {/* <form onSubmit={this.handleSubmit}>
          <h4>Login</h4>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form> */}
      </div>
    );
  }
}
