import React, { Component } from "react";
import config from "../../config";
import "./AddFolder.css";

import CodefulContext from "../../CodefulContext";

export default class AddFolder extends Component {
  static contextType = CodefulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      title: e.target["folder-name"].value,
    };
    fetch(`${config.DATABASE_URL}/api/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
        <form className="addFolder" onSubmit={(e) => this.context.addFolder(e)}>
          <input
            type="text"
            value={this.context.newFolder}
            placeholder="New Folder"
            onChange={(e) => this.context.setNewFolder(e)}
            aria-required="true"
            aria-label="New Folder"
          />
          <input type="submit" value="Add" aria-label="Add" />
        </form>
      </div>
    );
  }
}
