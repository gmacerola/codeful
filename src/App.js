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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import config from "./config";
import "./App.css";

export default class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    logout: () =>
      this.setState({
        notes: [],
        folders: [],
      }),
    addFolder: (newFolder) => {
      this.setState({
        folders: [...this.state.folders, newFolder],
      });
    },
    handleDeleteNote: (noteid, history) => {
      this.setState(
        {
          notes: this.state.notes.filter((note) => {
            return note.id !== noteid;
          }),
        },
        () => history.push("/")
      );
    },
    addNote: (newNote) => {
      this.setState({
        notes: [...this.state.notes, newNote],
      });
    },
    error: null,
    setError: (error) => this.setState({ error }),
    getFolders: () => {
      fetch(`${config.DATABASE_URL}api/folders`, {
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));

          return res.json();
        })
        .then((folders) => {
          this.setState({ folders });
        })
        .catch((error) => {
          console.error({ error });
        });
    },
    getNotes: () => {
      fetch(`${config.DATABASE_URL}api/notes`, {
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));

          return res.json();
        })
        .then((notes) => {
          this.setState({ notes });
        })
        .catch((error) => {
          console.error({ error });
        });
    },
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.state.getFolders();
      this.state.getNotes();
    }
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
            <PrivateRoute path="/notebook" component={Notebook} />
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
