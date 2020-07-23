import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Cheo" comment="Hola" />
      <CommentDetail author="Nox" comment="Basura" />
      <CommentDetail author="Johannes" comment="Inmunda" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
