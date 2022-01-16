import React, {useEffect, useState} from 'react';
import CodeIDE from './CodeIDE';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function LeftPanel(props) {

    const handleOpenAIfetch = () => {
        props.onRunClick();
    }

    const handleRecordSpeech = () => {
        props.onRecordSpeech();
    }

    const handleSpeechTextChange = (e) => {
        props.onSpeechTextChange(e);
    }

    return (
        <div>
            <CodeIDE codeData={props.codeData}/>
            <Box sx={{display: 'flex', justifyContent: "center", marginTop: 2}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', height: "100%", marginX: 5}}>
                        <Button onClick={handleOpenAIfetch}>Execute</Button>
                        <Button onClick={handleRecordSpeech}>Record</Button>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', marginX: 5}}>
                        <input style={{height:"100%", width:"100%"}} type="text" onChange={(e) => { 
                        handleSpeechTextChange(e.target.value)
                    }} value={props.speechText}/>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}