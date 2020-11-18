import React from "react";
import { Route, Link } from "react-router-dom";
import CodefulContext from "./CodefulContext";
import Registration from "./components/Registration/Registration";
import LandingPage from "./components/LandingPage/LandingPage";
import Notebook from "./components/Notebook/Notebook";
import Navbar from "./components/Navbar/Navbar";
import FolderPage from "./components/FolderPage/FolderPage";
import Note from "./components/Note/Note";
import AddNote from "./components/AddNote/AddNote";
import AddFolder from "./components/AddFolder/AddFolder";
import LoginPage from "./components/LoginPage/LoginPage";
import TokenService from "./services/token-service";
import "./App.css";

export default class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    newFolder: "",
    newNote: {
      title: "",
      content: "",
      folder_id: 0,
      modified: "",
    },
    setNewFolder: (e) => this.setState({ newFolder: e.target.value }),
    addFolder: (e) => {
      e.preventDefault();
      if (this.state.newFolder === "") {
        this.state.setError("💥 Folder Name Required! 💥");
      } else {
        this.state.setError(null);
        const newFolder = {
          id: this.state.folders.length,
          name: this.state.newFolder,
        };
        this.setState({
          folders: [...this.state.folders, newFolder],
          newFolder: "",
        });
      }
    },
    setNewNoteName: (e, oldNote) =>
      this.setState({ newNote: { ...oldNote, title: e.target.value } }),
    setNewNoteContent: (content) =>
      this.setState({ newNote: { ...this.state.newNote, content } }),
    setNewNoteFolderId: (e, oldNote) =>
      this.setState({
        newNote: { ...oldNote, folder_id: Number(e.target.value) },
      }),
    createNote: (e, history) => {
      e.preventDefault();
      if (
        this.state.newNote.title === "" ||
        this.state.newNote.content === "" ||
        this.state.newNote.folder_id === ""
      ) {
        this.state.setError("💥 Title, Content, Folder Required! 💥");
      } else {
        this.state.setError(null);
        const newNote = {
          title: this.state.newNote.title,
          content: this.state.newNote.content,
          folder_id: this.state.newNote.folder_id,
          modified: new Date().toISOString(),
          id: this.state.notes.length + 1,
        };
        this.setState(
          {
            notes: [...this.state.notes, newNote],
            newNote: {
              title: "",
              content: "",
              folder_id: 0,
              modified: "",
            },
          },
          () => {
            history.push(`/folder/${newNote.folder_id}`);
          }
        );
      }
    },
    error: null,
    setError: (error) => this.setState({ error }),
  };

  componentDidMount() {
    Promise.all([
      fetch("https://nameless-gorge-83479.herokuapp.com/api/notes"),
      fetch("https://nameless-gorge-83479.herokuapp.com/api/folders"),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  render() {
    return (
      <CodefulContext.Provider value={this.state}>
        <div className="App">
          <header className="Header">
            {TokenService.hasAuthToken() ? (
              <h1>
                <Link to="/notebook">Codeful</Link>
              </h1>
            ) : (
              <h1>
                <Link to="/">Codeful</Link>
              </h1>
            )}
          </header>
          <main>
            {/* <ErrorPage>
              {this.state.error && (
                <p className="error-message">
                  {typeof this.state.error === "string"
                    ? this.state.error
                    : "Something went wrong"}
                </p>
              )} */}
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={LoginPage} />
            <Route path="/notebook" component={Notebook} />
            <Route path="/folder/:folderid" component={FolderPage} />
            <Route path="/note/:noteid" component={Note} />
            <Route path="/addnote" component={AddNote} />
            <Route path="/addfolder" component={AddFolder} />
            {/* </ErrorPage> */}
          </main>
        </div>
      </CodefulContext.Provider>
    );
  }
}
