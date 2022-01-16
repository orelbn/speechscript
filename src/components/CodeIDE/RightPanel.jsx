import React, {useEffect, useState} from 'react';

export default function RightPanel(props) {
    const [codeData, setcodeData] = useState(props.codeData);

    useEffect(() => {
        console.log(props.codeData);
        const frame = document.getElementById("iframeTest");
        var script = frame.contentDocument.createElement("script");
        const iframeDoc = frame.contentDocument;
        script.append(`window.onload = function () {${props.codeData}}`);
        iframeDoc.documentElement.appendChild(script);
        frame.contentWindow.location.reload(true);


    }, [props.codeData])

    

    const styleProps = {
        width: "100%",
        height: "75%"
    }


    return (

    <>
    <iframe src="./test.html" id="iframeTest" sandbox="allow-scripts allow-same-origin" width="400px" height="500px">
        
    </iframe>
    </>
    )
}