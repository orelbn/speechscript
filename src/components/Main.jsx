import { React, useState } from 'react'
import { getCode } from '../script/fetchopenai'

export const Main = () => {
    const [codeData, setcodeData] = useState("")

    /**
     * fetches result from openAI API based on user's command, when user clicks Run
     */
    const handleOpenAIfetch = async() => {
        const command = "Add a button and center into the middle of the page"
        const codes =  await getCode(command)
        setcodeData(codes.choices[0].text)
        console.log(codes.choices[0].text)
    }
    return (
        <div>
            <button onClick={handleOpenAIfetch}>Run</button>
        </div>
    )
}

export default Main
