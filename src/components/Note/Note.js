import React, { Component } from "react";
import { Link } from "react-router-dom";
import CodefulContext from "../../CodefulContext";
import "./Note.css";

export default class Note extends Component {
  static contextType = CodefulContext;

  render() {
    const { title, id, modified } = this.props;
    return (
      <div className="Note">
        <h2 className="Note__title">
          <Link to={`/note/${id}`}>{title}</Link>
        </h2>
        <div className="Note__dates">
          <div className="Note__dates-modified">
            Modified <span className="Date">{modified}</span>
          </div>
        </div>
      </div>
    );
  }
}
