import React, { Component } from "react";
import TokenService from "../../services/token-service";
import "./Registration.css";

import CodefulContext from "../../CodefulContext";

export default class Registration extends Component {
  static contextType = CodefulContext;

  handleRegistration = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const newUser = { email: email.value, password: password.value };
    TokenService.saveAuthToken("testing");
    this.props.history.push("/notebook");
  };

  render() {
    return (
      <div className="registrationForm">
        <form className="addUser" onSubmit={this.handleRegistration}>
          <label className="registrationEmail" htmlFor="newUserEmail">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="newUserEmail"
            name="email"
            aria-required="true"
            aria-label="New User Email"
            value="demo@demo.com"
          />
          <label className="registrationPassword" htmlFor="newUserPassword">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="newUserPassword"
            name="password"
            aria-required="true"
            aria-label="Password"
            value="P@ssword1234!"
          />
          <input type="submit" value="Register" aria-label="Register" />
        </form>
      </div>
    );
  }
}
