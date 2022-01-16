import { React, useState } from 'react'
import { getCode } from '../script/fetchopenai'
import fetchToken from '../scripts/fetchToken.js';
import getTextFromMic from '../scripts/getTextFromMic';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container';
import CodeIDE from './CodeIDE/CodeIDE';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

export const Main = () => {
    const [codeData, setcodeData] = useState("")
    const [displayText, setDisplayText] = useState("Initial Text");

    /**
     * fetches result from openAI API based on user's command, when user clicks Run
     */
    const handleOpenAIfetch = async() => {
        const command = displayText
        const codes =  await getCode(command)
        console.log(codes)
        setcodeData(codes.choices[0].text) // string
        console.log(codes.choices[0].text)
    }

    /**
     * Function grabs Speech to Text API token and passes it to the recognizeSpeechCallback function.
     */
    const handleRecordSpeech = () => {
        fetchToken().then(response => {
            recognizeSpeechCallback(getTextFromMic(response));
        })
    }

    /**
     * Gets the text from recorded speech and sets state variable with text.
     * @param {speechsdk.SpeechRecognizer} recognizer 
     */
    const recognizeSpeechCallback = (recognizer) => {
        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = result.text;
                setDisplayText(result.text);
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }
    
            console.log(displayText);
            return displayText
        });
    }

    return (
        <Container sx={{height: "100vh", scrollSnapAlign: "center"}}>
            <h1>{displayText}</h1>
            <button onClick={handleOpenAIfetch}>Run</button>
            <button onClick={handleRecordSpeech}>Record Speec</button>
            <input type="text" onChange={(e) => { 
                console.log(e.target.value)
                setDisplayText(e.target.value)
            }} value={displayText}/>

            <div>
                <Paper sx={{margin:'auto'}}>
                    <CodeIDE style={{margin:'auto'}} codeData={codeData}/>
                </Paper>
            </div>
        </Container>
    )
}

export default Main
