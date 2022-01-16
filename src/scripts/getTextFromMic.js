import fetchToken from './fetchToken.js';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import speechsdk from 'microsoft-cognitiveservices-speech-sdk';

const getTextFromMic = async () => {
    const tokenObj = await fetchToken();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';
    
    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    console.log("speak into your microphone")

    return recognizer.recognizeOnceAsync(result => {
        let displayText;
        if (result.reason === ResultReason.RecognizedSpeech) {
            displayText = `RECOGNIZED: Text=${result.text}`
        } else {
            displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
        }

        console.log(displayText);
        return displayText
    });
}

export default getTextFromMic;