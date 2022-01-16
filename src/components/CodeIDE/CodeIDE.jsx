<<<<<<< HEAD
import React, {useState, useEffect, useRef} from 'react';

export default function CodeIDE(props) {
    const thisRef = useRef(null);
    useEffect(() => {
        // thisRef.current.eval(myString);
    }, [])

    const myString = "var myDiv = document.createElement('div'); myDiv.id = 'testing'; myDiv.style.backgroundColor='red';";

    const Test = () => {
        return (
            <h1>testing</h1>
        )
    }

    return (
        <div>
            {/* <iframe width="500" height="500" ref={thisRef} src={Test}>
                <div>
                    <h1>test</h1>
                </div>
                </iframe> */}
        </div>
    )
}
=======
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
        style={{margin:'auto'}}
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
>>>>>>> 60aad1cfcc04a64634c359e78aeada3a643711cb
