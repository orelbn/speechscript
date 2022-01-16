import axios from 'axios';

const fetchToken =  async () => {
    const speechKey = process.env.REACT_APP_SPEECH_KEY;
    const speechRegion = process.env.REACT_APP_SPEECH_REGION;

    if (speechKey === 'paste-your-speech-key-here' || speechRegion === 'paste-your-speech-region-here') {
        console.log("keys are not valid");
    } else {
        const headers = { 
            headers: {
                'Ocp-Apim-Subscription-Key': speechKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        try {
            const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
            const return_object = { authToken: tokenResponse.data, region: speechRegion }
            return return_object;
        } catch (err) {
            console.log("there was an error")
        }
    }
};

export default fetchToken;