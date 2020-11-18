import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CodefulContext from "../../CodefulContext";
import TokenService from "../../services/token-service";
import "./Notebook.css";

export default class Notebook extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = CodefulContext;

  render() {
    return this.context.notes.length > 0 && !TokenService.hasAuthToken() ? (
      <Redirect to="/" />
    ) : (
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
