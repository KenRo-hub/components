import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Cheo" comment="Hola" />
      <CommentDetail author="Nox" comment="Señor" />
      <CommentDetail author="Johannes" comment="Como estas?" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
