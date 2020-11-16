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
  // const [value, setValue] = React.useState("**Hello world!!!**");
  // const [selectedTab, setSelectedTab] = React.useState("write");
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
            value={this.context.newNote.name}
            placeholder="Name"
            onChange={(e) =>
              this.context.setNewNoteName(e, this.context.newNote)
            }
            aria-label="Note Name"
          />
          {/* <input
            type="text"
            value={this.context.newNote.content}
            placeholder="Content"
            onChange={(f) =>
              this.context.setNewNoteContent(f, this.context.newNote)
            }
            aria-label="Note Content"
          /> */}
          <select
            value={this.context.newNote.folderId}
            onChange={(g) =>
              this.context.setNewNoteFolderId(g, this.context.newNote)
            }
            aria-label="Select Folder"
          >
            <option value="None">Select</option>
            {this.context.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Add" aria-label="Add Note" />
        </form>

        <div className="container">
          <ReactMde
            value={this.context.newNote.content}
            onChange={(f) =>
              this.context.setNewNoteContent(f, this.context.newNote)
            }
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
            __html: converter.makeHtml(this.state.value),
          }}
        />
      </div>
    );
  }
}