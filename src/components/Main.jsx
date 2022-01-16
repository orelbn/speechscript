import { React, useState } from 'react'
import { getCode } from '../script/fetchopenai'
import fetchToken from '../scripts/fetchToken.js';
import getTextFromMic from '../scripts/getTextFromMic';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

export const Main = () => {
    const [codeData, setcodeData] = useState("")
    const [displayText, setDisplayText] = useState("Initial Text");

    /**
     * fetches result from openAI API based on user's command, when user clicks Run
     */
    const handleOpenAIfetch = async() => {
        const command = "Add a button and center into the middle of the page"
        const codes =  await getCode(command)
        setcodeData(codes.choices[0].text)
        console.log(codes.choices[0].text)
    }

    const handleRecordSpeech = () => {
        fetchToken().then(response => {
            secondCallback(getTextFromMic(response));
        })
    }

    const secondCallback = (recognizer) => {
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
        <div>
            <h1>{displayText}</h1>
            <button onClick={handleOpenAIfetch}>Run</button>
            <button onClick={handleRecordSpeech}>Record Speec</button>
        </div>
    )
}

export default Main
