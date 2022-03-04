import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleClearClick = ()=> {
        // console.log("Uppercase was clicked " + text);
        let newText = ("");
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleLowClick = ()=> {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    
    const handleOnChange = (event)=> {
        // console.log("On Change.")
        setText(event.target.value);
    }

    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard!", "success");
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been Removed!", "success");
    }

    const [text, setText] = useState("");
    
    return (
        <>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#152b6a'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p> 
                <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:"Enter Your Text to Preview"}</p>
            </div>
        </>
    )
}
