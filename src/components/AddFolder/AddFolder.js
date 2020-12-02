import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../services/token-service";
import "./AddFolder.css";

import CodefulContext from "../../CodefulContext";

export default class AddFolder extends Component {
  static contextType = CodefulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      title: e.target.folder.value,
    };
    fetch(`${config.DATABASE_URL}/api/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(folder),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((folder) => {
        this.context.addFolder(folder);
        this.props.history.push(`/folder/${folder.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div>
        <form className="addFolder" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="folder"
            id="folder"
            placeholder="New Folder"
            aria-required="true"
            aria-label="New Folder"
          />
          <input type="submit" value="Add" aria-label="Add" />
        </form>
      </div>
    );
  }
}
