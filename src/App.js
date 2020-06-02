import React, { useState } from 'react';
import './App.css';
import CodeEditor from './Components/CodeEditor'


const App = () => {
    const [message, setMessage] = useState('');
    const [messBlockActive, setMessBlockActive] = useState(false)

    function messageBoxAnimation(message)
    {
        setMessBlockActive(true);
        setTimeout(() => {
            setMessage(message);
        },200)
        setTimeout(() => {
            setMessage('');
            setMessBlockActive(false);
        },2000)
    } 

    return(    
    <div id="container">
          <div className = {messBlockActive ? "messageBox active" : "messageBox"}>
        <div>
            <h1>{message}</h1>
        </div>
    </div>
    <header>
        <div id = "header">
            <h1>Line Numbers Deleter</h1>
        </div>
    </header>
        <CodeEditor
            setMessage = {messageBoxAnimation}
        />
        <div id = "footer">
            <p>
                Created for students | Supported by CodeMirror
                
            </p>
        </div>
    </div>
    )
}

export default App;