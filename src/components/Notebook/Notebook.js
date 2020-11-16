import React, { Component } from "react";
import CodefulContext from "../../CodefulContext";
import Note from "../Note/Note";
import { getNotesForFolder } from "../../NotesHelper";
import "./Notebook.css";

export default class Notebook extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = CodefulContext;

  render() {
    const { folderId } = this.props.match.params;
    const { notes = [] } = this.context;
    const notesForFolder = getNotesForFolder(notes, folderId);
    return (
      <div>
        <h2>Notebook</h2>
        <section className="NoteListMain">
          <ul>
            {notesForFolder.map((note) => (
              <li key={note.id}>
                <Note
                  id={note.id}
                  title={note.title}
                  modified={note.modified}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
