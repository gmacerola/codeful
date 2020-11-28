import React, { Component } from "react";
import AuthAPIService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./LoginPage.css";

import CodefulContext from "../../CodefulContext";

export default class LoginPage extends Component {
  static contextType = CodefulContext;

  state = {
    error: null,
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = { email: email.value, password: password.value };
    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/notebook");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="loginForm">
        <form className="loginUser" onSubmit={this.handleLogin}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <label className="loginEmail" htmlFor="userEmail">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="userEmail"
            name="email"
            aria-required="true"
            aria-label="New User Email"
            defaultValue="demo@demo.com"
          />
          <label className="loginPassword" htmlFor="userPassword">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="userPassword"
            name="password"
            aria-required="true"
            aria-label="Password"
            defaultValue="12345678"
          />
          <input type="submit" value="Login" aria-label="Login" />
        </form>
      </div>
    );
  }
}
