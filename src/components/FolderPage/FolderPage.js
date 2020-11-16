import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FolderPage.css";
import PropTypes from "prop-types";

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
    console.log(filteredNotes);
    return (
      <div className="FoldersNotes">
        <p>Notes</p>
        <ul className="NotesList">
          {filteredNotes.map((note) => (
            <li key={note.id} className="note">
              <Link to={{ pathname: `authorized/note/${note.id}` }}>
                {note.name}{" "}
              </Link>
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
