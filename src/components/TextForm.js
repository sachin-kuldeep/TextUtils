import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpclick=()=> {
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowclick=()=> {
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear=()=> {
        let newText="";
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    const handleSentClick=()=> {
        let newText=text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted to sentence case!", "success");
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleChange=(event)=> {
        setText(event.target.value)
    }

    const [text, setText]=useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="10"  style={{backgroundColor:props.mode==='dark'?'#253b50':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowclick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSentClick}>
        Convert to Sentence case
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
        Remove extra spaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
        </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
        Clear
      </button>
    </div>

    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters </p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
