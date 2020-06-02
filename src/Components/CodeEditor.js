import React, {useState} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/mode/clike/clike';

import CodeHeader from './CodeHeader'
import Buttons from './Buttons'


const CodeEditor = (props) => {
    const [value, setValue] = useState('');

    function deleteLineNumbers(inputText)
    {
        const REGEX = new RegExp(/^ *\d+/gm);
        let cleanText = cleanTextByRegex(inputText, REGEX);
        copyToClipBoard(cleanText);
        showMessage();
        setValue(cleanText);
    }

    function cleanTextByRegex(text, regex)
    {
        var clearedTextArray = [];
        const inputedText = text.split("\n");
        inputedText.map((line,index) => {
            clearedTextArray.push(clearLine(line, regex));
        })
        return clearedTextArray.join("\n");
    }

    const clearLine = (line,regex) => line.replace(regex,'');
    
    function copyToClipBoard(text)
    {
        var copyBlock = document.createElement("textarea");
        copyBlock.setAttribute("id","copyBlock");
        document.body.appendChild(copyBlock);
        copyBlock = document.getElementById("copyBlock");
        copyBlock.value = text;
        copyBlock.select();
        copyBlock.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(copyBlock);
    }

    function showMessage()
    {
        props.setMessage("Your code is now copied to clipboard");
    }


    return (
        <div className="playGround">
            <CodeHeader/>
            <div className = "codeMirrorBox">
                <CodeMirror
                    value={value}
                    options={{
                        mode: 'clike',
                        theme: 'lesser-dark',
                        lineNumbers: true
                    }}
                    onBeforeChange={(editor, data, value) => {setValue(value);}}
                />
                <Buttons
                    submitPress = {() => deleteLineNumbers(value)}
                    cleanPress = {() => setValue('')}
                />
            </div>
        </div>
    )
}

export default CodeEditor;