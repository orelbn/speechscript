import React, {useState, useEffect, useRef} from 'react';

export default function CodeIDE(props) {
    const thisRef = useRef(null);
    useEffect(() => {
        // thisRef.current.eval(myString);
    }, [])

    const myString = "var myDiv = document.createElement('div'); myDiv.id = 'testing'; myDiv.style.backgroundColor='red';";

    const Test = () => {
        return (
            <h1>testing</h1>
        )
    }

    return (
        <div>
            {/* <iframe width="500" height="500" ref={thisRef} src={Test}>
                <div>
                    <h1>test</h1>
                </div>
                </iframe> */}
        </div>
    )
}