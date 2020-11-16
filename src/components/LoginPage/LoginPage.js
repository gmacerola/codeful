import React, { Component } from "react";
import TokenService from "../../services/token-service";
import "./LoginPage.css";

import CodefulContext from "../../CodefulContext";

export default class LoginPage extends Component {
  static contextType = CodefulContext;

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const newUser = { email: email.value, password: password.value };
    TokenService.saveAuthToken("testing");
    this.props.history.push("/notebook");
  };

  render() {
    return (
      <div className="loginForm">
        <form className="loginUser" onSubmit={this.handleLogin}>
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
            value="demo@demo.com"
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
            value="P@ssword1234!"
          />
          <input type="submit" value="Login" aria-label="Login" />
        </form>
      </div>
    );
  }
}
