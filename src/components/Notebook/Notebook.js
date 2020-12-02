import React, { Component } from "react";
import CodefulContext from "../../CodefulContext";
import "./Notebook.css";

export default class Notebook extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = CodefulContext;

  componentDidMount() {
    if (!this.context.folders.length) {
      this.context.getFolders();
      this.context.getNotes();
    }
  }

  render() {
    return (
      <div className="notebook">
        <h2>Notebook</h2>
        <section className="NoteListMain">
          <h4>Select a folder above to see it's notes or</h4>
          <hr></hr>
          <h4>Add a folder by clicking the "Add Folder" tab above or</h4>
          <hr></hr>
          <h4>
            Add a note to an existing folder by clicking the "Add Note" button
            above.
          </h4>
        </section>
      </div>
    );
  }
}
