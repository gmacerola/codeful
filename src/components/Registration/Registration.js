import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./Registration.css";

import CodefulContext from "../../CodefulContext";

export default class Registration extends Component {
  static contextType = CodefulContext;

  state = {
    error: null,
  };

  handleRegistration = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="registrationForm">
        <form className="addUser" onSubmit={this.handleRegistration}>
          {this.state.error && <p className="error">{this.state.error}</p>}
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
          />
          <input type="submit" value="Register" aria-label="Register" />
        </form>
      </div>
    );
  }
}
