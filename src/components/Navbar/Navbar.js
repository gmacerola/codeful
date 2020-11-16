import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import CodefulContext from "../../CodefulContext";
import TokenService from "../../services/token-service";
import "./Navbar.css";

export default class Navbar extends Component {
  static contextType = CodefulContext;

  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  render() {
    const { folders = [] } = this.context;
    return (
      <div className="NotebookNav">
        <ul className="NotebookNav__list">
          {TokenService.hasAuthToken() ? (
            <div>
              {folders.map((folder) => (
                <li key={folder.id}>
                  <NavLink
                    to={`/folder/${folder.id}`}
                    activeClassName="selected"
                  >
                    {folder.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/addfolder">
                  <button className="staticButton">Add Folder</button>
                </Link>
              </li>
              <li>
                <Link to="/addnote">
                  <button className="staticButton">Add Note</button>
                </Link>
              </li>
              <li>
                <button
                  type="submit"
                  className="staticButton"
                  aria-label="logoutButton"
                  onClick={() => this.logout()}
                >
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/registration">
                <button>Register Now!</button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    );
  }
}
