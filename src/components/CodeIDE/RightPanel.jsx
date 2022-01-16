import React, {useEffect, useState} from 'react';

export default function RightPanel(props) {
    const [codeData, setcodeData] = useState(props.codeData);

    useEffect(() => {
        console.log(props.codeData);
        const frame = document.getElementById("iframeTest");
        var script = frame.contentDocument.createElement("script");
        const iframeDoc = frame.contentDocument;
        script.append(`(function () {${props.codeData}}())`);
        // script.async = true;
        iframeDoc.documentElement.appendChild(script);
        // frame.contentWindow.location.reload(true);
    }, [props.codeData])

    const styleProps = {
        width: "100%",
        height: "100%",
    }


    return (

    <>
    <iframe src="./test.html" id="iframeTest" sandbox="allow-scripts allow-same-origin" width="400px" height="600px" style={{"borderRadius": "10px", borderWidth: "0px"}}>
        
    </iframe>
    </>
    )
}