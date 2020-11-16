import React, { Component } from "react";
import "./AddFolder.css";

import CodefulContext from "../../CodefulContext";

export default class AddFolder extends Component {
  static contextType = CodefulContext;
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
