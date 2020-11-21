import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import CodefulContext from "../../CodefulContext";
import * as Showdown from "showdown";
import { findNote } from "../../NotesHelper";
import "./Note.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default class Note extends Component {
  static contextType = CodefulContext;

  static defaultProps = {
    match: {
      params: {},
    },
  };

  handleDeleteNote = (noteid) => {
    this.props.history.push(`/notebook`);
  };

  render() {
    const { notes = [] } = this.context;
    const { noteid } = this.props.match.params;
    const note = findNote(notes, noteid) || { content: "" };

    return notes.length > 0 && !note.id ? (
      <Redirect to="/" />
    ) : (
      <div className="note">
        <h2 className="Note__title">
          <Link to={`/note/${noteid}`}>{note.title}</Link>
        </h2>
        <div className="Note__dates">
          <div className="Note__dates-modified">
            Modified <span className="Date">{note.modified}</span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(note.content),
          }}
        />
        <button
          className="deleteNote"
          value={noteid}
          onClick={() =>
            this.context.handleDeleteNote(note.id, this.props.history)
          }
        >
          Delete Note
        </button>
      </div>
    );
  }
}
