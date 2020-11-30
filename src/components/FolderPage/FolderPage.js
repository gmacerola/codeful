import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./FolderPage.css";
import PropTypes from "prop-types";
import TokenService from "../../services/token-service";

import CodefulContext from "../../CodefulContext";

export default class FolderPage extends Component {
  static contextType = CodefulContext;
  static defaultProps = {
    folder_id: "0",
  };
  static propTypes = {
    folder_id: PropTypes.string.isRequired,
  };

  render() {
    const filteredNotes = this.context.notes.filter(
      (note) => note.folder_id === Number(this.props.match.params.folderid)
    );
    const folderIndex = Number(this.props.match.params.folderid) - 1;
    const folderName = this.context.folders[folderIndex].title;
    return this.context.notes.length > 0 && !TokenService.hasAuthToken() ? (
      <Redirect to="/" />
    ) : (
      <div className="FoldersNotes">
        <p>{folderName} Notes</p>
        <ul className="NotesList">
          {filteredNotes.map((note) => (
            <li key={note.id} className="note">
              <Link to={`/note/${note.id}`}>{note.title} </Link>
              <p>{Date(note.modified).toLocaleString()}</p>
            </li>
          ))}
        </ul>
        <Link to="/addnote">
          <button className="addNote">Add Note</button>
        </Link>
      </div>
    );
  }
}
