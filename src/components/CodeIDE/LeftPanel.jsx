import React, {useEffect, useState} from 'react';
import CodeIDE from './CodeIDE';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Main.css';

export default function LeftPanel(props) {
    const [recording, setRecording] = useState(props.recording);

    useEffect(() => {
        setRecording(props.recording);
    }, [props.recording])

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
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', height: "15vh", marginRight: 5, width:170}}>
                        <Button  
                        variant="contained" 
                        onClick={handleOpenAIfetch} 
                        sx={{height: 50, backgroundColor: "#ffc5c5", "&:hover": {backgroundColor: "#e8bcbc"}}}
                        >
                        Execute
                        </Button>
                        <Button className={recording && "recording"}
                                color="error" 
                                variant="contained" 
                                onClick={handleRecordSpeech} 
                                sx={{height: 50, marginTop: 3}}>
                        Record
                        </Button>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', marginX: 5}}>
                        <input style={{height:"100%", width:"133%", backgroundColor: "black", borderRadius: "10px", color: "white", borderWidth: "0px"}} type="text" onChange={(e) => { 
                        handleSpeechTextChange(e.target.value)
                    }} value={props.speechText}/>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}