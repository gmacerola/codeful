import React, { Component } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./AddNote.css";

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
  };

  render() {
    return (
      <div className="createNoteForm">
        <form
          onSubmit={(e) => {
            this.context.createNote(e, this.props.history);
          }}
        >
          <input
            type="text"
            value={this.context.newNote.title}
            placeholder="Note Title"
            onChange={(e) =>
              this.context.setNewNoteName(e, this.context.newNote)
            }
            aria-label="Note Title"
          />
          <select
            value={this.context.newNote.folder_id}
            onChange={(g) =>
              this.context.setNewNoteFolderId(g, this.context.newNote)
            }
            aria-label="Select Folder"
          >
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
            value={this.context.newNote.content}
            onChange={this.context.setNewNoteContent}
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
            __html: converter.makeHtml(this.context.newNote.content),
          }}
        />
      </div>
    );
  }
}
