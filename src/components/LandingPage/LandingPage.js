import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <h2>Landing Page</h2>
        <h3>Already a User? Login!</h3>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <h3>Want your own Coding Notebook?</h3>
        <Link to="/registration">
          <button>Register Now!</button>
        </Link>
      </div>
    );
  }
}
