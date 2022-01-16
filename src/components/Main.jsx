import { React, useState } from 'react'
import { getCode } from '../script/fetchopenai'
import fetchToken from '../scripts/fetchToken.js';
import getTextFromMic from '../scripts/getTextFromMic';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container';
import CodeIDE from './CodeIDE/CodeIDE';
import Heading from './CodeIDE/Heading.js';
import Grid from '@mui/material/Grid';
import LeftPanel from './CodeIDE/LeftPanel';
import CenterPanel from './CodeIDE/CenterPanel';
import RightPanel from './CodeIDE/RightPanel';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

export const Main = () => {
    const [codeData, setcodeData] = useState("")
    const [speechText, setSpeechText] = useState("");

    /**
     * fetches result from openAI API based on user's command, when user clicks Run
     */
    const handleOpenAIfetch = async() => {
        const command = speechText
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
                setSpeechText(result.text);
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }
    
            return displayText
        });
    }

    const handleSpeechTextChange = (e) => {
        setSpeechText(e);
    }

    return (
        <Container sx={{height: "100vh", scrollSnapAlign: "center", backgroundColor: "#2d1919", width: "100vw"}}>
            <Heading />
            <Container disableGutters={true} maxWidth={false}>
                
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <LeftPanel onRunClick={handleOpenAIfetch}
                                   onRecordSpeech={handleRecordSpeech} 
                                   onSpeechTextChange={handleSpeechTextChange}
                                   speechText={speechText}
                                   codeData={codeData}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <CenterPanel />
                    </Grid>
                    <Grid item xs={5}>
                        <RightPanel codeData={codeData} />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Main
