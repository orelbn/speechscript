const axios = require('axios')
const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

/**
 * fetches code from openAI API
 */
export const getCode = async (command) => {
    const template = `<|endoftext|>/* I start with a blank HTML page, and incrementally modify it via <script> injection. Written for Chrome. */\n/* Command: Add "Hello World", by adding an HTML DOM node */\nvar helloWorld = document.createElement('div');\nhelloWorld.innerHTML = 'Hello World';\ndocument.body.appendChild(helloWorld);\n/* Command: Clear the page. */\nwhile (document.body.firstChild) {\n  document.body.removeChild(document.body.firstChild);\n}\n\n`
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + REACT_APP_API_KEY,
    }
    const options = {
        "max_tokens": 1000,
        "prompt": template.concat("/* Command:" + command + "*/\n"),
        // "prompt": template,
        "temperature": 0,
        "stop": "/* Command:",
        // "stream": true
    }
    return axios.post(url, options, {
        headers: headers
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        })

}



