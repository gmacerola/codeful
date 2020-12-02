import React, { Component } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./AddNote.css";
import config from "../../config";
import TokenService from "../../services/token-service";

import CodefulContext from "../../CodefulContext";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default class AddNote extends Component {
  static contextType = CodefulContext;
  state = {
    value: "**Hello world!!!**",
    selectedTab: "write",
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: e.target.title.value,
      content: this.state.content,
      folder_id: e.target.folder_id.value,
    };
    fetch(`${config.DATABASE_URL}/api/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push(`/folder/${note.folder_id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div className="createNoteForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Note Title"
            name="title"
            aria-label="Note Title"
          />
          <select name="folder_id" aria-label="Select Folder">
            <option value="None">Select Folder</option>
            {this.context.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.title}
              </option>
            ))}
          </select>
          <input type="submit" value="Add" aria-label="Add Note" />
        </form>

        <div className="container">
          <ReactMde
            value={this.state.content}
            onChange={(content) => this.setState({ content })}
            selectedTab={this.state.selectedTab}
            onTabChange={(selectedTab) => this.setState({ selectedTab })}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>

        <h2>Preview:</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(this.state.content),
          }}
        />
      </div>
    );
  }
}
