import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import marked from "marked";

import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";


  function App() {
    const [value, setValue] = useState("// You can write the code");
    const options = {
      viewportMargin: Infinity,
      mode: "markdown",
      lineNumbers: true,
      theme: "default height500 readonly"
    };
    
  return (
    <>
      <h1 className="margin">Markdown Editor</h1>
      <div className="App">
        <CodeMirror
          value={value}
          options={options}
          onBeforeChange={(editor, data, value) => setValue(value)}
          className="margin"
        />
        <div
          dangerouslySetInnerHTML={{ __html: marked(value) }}
          className="margin"
        ></div>
      </div>
    </>
  );
}

export default App;
