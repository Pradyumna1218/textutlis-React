import React, {useState} from "react";


export default function TextForm({heading, mode,showAlert, btn}) {
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Converted to Upper case", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Converted to Lower case", "success")

    }
    const handleDeleteClick = ()=>{
        let newText = ''
        setText(newText)
        showAlert("Deleted case", "warning")

    }

  
    const handleReverseClick = () => {
        let newText = text.slice(0).split('').reverse().join('');
        setText(newText)
        showAlert("Converted to Reverse form", "success")
      };

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text)
        showAlert("Copied to text", "success")

    }
    
    const [text, setText] = useState('')

    return (
        <>
        
        <div className="container"  style = {{color: mode === 'dark'?  'white': 'black'}}> 
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  rows = "8" id="mybox" value = {text} onChange={handleOnChange} style = {{backgroundColor: mode === 'dark'? '#1b3c56': 'white', color: mode === 'dark'? 'white': 'black' }}></textarea>
            </div>
            <button disabled = {text.length === 0} className={`btn btn-primary mx-1 my-1`} onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled = {text.length === 0} className={`btn btn-primary mx-1 my-1`} onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled = {text.length === 0} className={`btn btn-primary mx-1 my-1`} onClick={handleReverseClick}>Reverse The String</button>
            <button disabled = {text.length === 0} className={`btn btn-primary mx-1 my-1`} onClick={handleCopyClick}>Copy Text</button>
            <button disabled = {text.length === 0} className={`btn btn-primary mx-1 my-1`} onClick={handleDeleteClick}>Delete Text</button>
        </div>
        <div className="container my-3" style = {{color: mode === 'dark'?  'white': 'black'}}>
            <h2>Your Summary Here</h2>
            <p>TextArea has {text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter your text above to preview it"}</p>
        </div>
        </>
  );
}

