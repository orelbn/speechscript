# speechScript

Turn your voice into runnable code and demo it in your browser. 
Project for nwHacks 2022.

## Inspiration
What if you could just say whatever, and the code could just magically pop out? Created for nwHacks 2022, speechScript can take your lovely voice and convert it directly to code.

## What it does
Converts speech to text and converts text to code; Allowing the users to use their speech to create code!
Currently works with javascript, rendering the elements created by the openAI to the screen.

## Technology
- Microsoft Azure: Utilizes Microsoft Azure Speech Services to enable voice recoginition
- OpenAI: Utilizes OpenAI's Codex engine to retrieve AI generated code from text
- React: Designed and Implemented using the React Framework
- Sass: Organized css files with sass, and change it back to normal css when ran

## Challenges
Several challenges were enountered while building speechScript:
- Ran into technical challenges sending data to the Microsoft Azure Speech Services API (thanks to the Microsoft team for helping us resolve them!)
- Had to figure out the OpenAI engine landscape to figure out which API we were meant to use, and then subsequently how to properly send data to this API
- It took a long time to figure out how to execute a string as a Javascript command in an iFrame

## Accomplishments

The team made several personal accomplishments in creating speechScript:
- Learned how to use Microsoft Azure's Speech Services API, the OpenAI Codex API, and integrate both of these with our application
- Learned how to set up iFrames and run external commands in them
- Learned more about CSS styling
- Managed to successfully navigate Git while working as a team

## Business viability
It can help those who might struggle using the keyboard and make coding easier. Many computer scientists and other coders alike suffer long-term hand fatigues and injuries; software like this can make their work easier and prevent injury.

## Instructions

\*Note\* This application requires that the user have access to the Microsoft Azure Speech Services API and the OpenAI Codex engine API.

To download and set up the application:

- Clone this git repository
- Open a new terminal and navigate to the top folder of the project
- Run the command `npm install`
- Once this is finished, add API keys for Microsoft Azure Speech Services and OpenAI Codex services to a `.env` file, with the following titles:
    - `REACT_APP_API_KEY = "your key here"` 
    - `REACT_APP_SPEECH_KEY = "your key here"`
    - `REACT_APP_SPEECH_REGION = "your region here"`
- In the terminal, run the command `npm start`
- Access the application at `localhost:3000` in your browser.

To run the speechScript application:

- Click the `Record` button at the bottom of the screen and begin talking
- After a moment of silence, the application will determine what was said
- Click `Execute` to generate the javascript code and run it!