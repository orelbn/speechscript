import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import 'ace-builds/webpack-resolver'
import brace from 'brace';
import "brace/mode/javascript";
import "brace/mode/python";
import "brace/mode/java";
import "brace/theme/twilight";
import "brace/ext/language_tools";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const CodeIDE = ({codeData}) => {
  function onChange(newValue) {
    console.log(newValue);
  }


  return (
      <AceEditor
        style={{height:450, width:"100%"}}
        value={codeData}
        mode="javascript"
        theme="twilight"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }}
      />
      
  );
};

export default CodeIDE;
